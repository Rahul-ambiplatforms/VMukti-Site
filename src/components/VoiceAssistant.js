import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const IDLE = "idle";
const LISTEN_COMMAND = "listen_command";
const SPEAKING = "speaking";
const AWAIT_CLARIFICATION = "await_clarification";

// This map is still used for non-dynamic routes
const commandMap = {
  // Routes
  "open home": "/",
  "go to home": "/",
  "open homepage": "/",
  "open solutions": "/solution",
  "show solution details": "/solution/:name",
  "open industries": "/industry",
  "show industry details": "/industry/:name",
  "about us": "/about-us",
  "privacy policy": "/privacy-policy",
  "terms and conditions": "/terms-and-conditions",
  "open careers": "/careers",
  blog: "/blog",
  "read blog": "/blog/:urlWords",
  "contact us": "/contact-us",
  "open ambicam": "/Ambicam",
  "thank you page": "/thank-you",
  "thank you us": "/thank-you-us",
  "blog thank you": "/blog-thank-you",
  "careers thank you": "/careers-thank-you",

  // Actions
  "scroll up": "SCROLL_UP",
  "go up": "SCROLL_UP",
  "scroll down": "SCROLL_DOWN",
  "go down": "SCROLL_DOWN",
};

function speak(text) {
  window.speechSynthesis.cancel();
  const utterance = new window.SpeechSynthesisUtterance(text);
  utterance.rate = 1.0;
  utterance.lang = "en-US";
  window.speechSynthesis.speak(utterance);
}

function useTabActive() {
  const [active, setActive] = useState(!document.hidden);
  useEffect(() => {
    const handleVisibility = () => setActive(!document.hidden);
    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);
  return active;
}

function getLevenshteinDistance(a, b) {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const matrix = Array(a.length + 1)
    .fill(null)
    .map(() => Array(b.length + 1).fill(null));
  for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
  for (let j = 0; j <= b.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1, // deletion
        matrix[i][j - 1] + 1, // insertion
        matrix[i - 1][j - 1] + cost // substitution
      );
    }
  }
  return matrix[a.length][b.length];
}

const knownSectionsDisplay = [
  // -----This is the section of the homepage we can jump to-----
  { name: "hero", id: "section-hero" },
  { name: "diagram", id: "section-diagram" },
  { name: "computer vision", id: "section-computervision" },
  { name: "trusted", id: "section-trusted" },
  { name: "solutions", id: "section-solutions" },
  { name: "reviews", id: "section-reviews" },
  { name: "industries", id: "section-industries" },
  { name: "results", id: "section-results" },
  { name: "achievements", id: "section-achievements" },
  { name: "blogs", id: "section-blogs" },
  { name: "contact", id: "section-contact-cta" },
  { name: "faq", id: "section-faq" },
];

export default function VoiceAssistant() {
  const [status, setStatus] = useState(IDLE);
  const [transcript, setTranscript] = useState("");
  const [listening, setListening] = useState(false);
  const [error, setError] = useState("");
  const recognitionRef = useRef(null);
  const navigate = useNavigate();
  const tabActive = useTabActive();
  const [micSupported, setMicSupported] = useState(true);

  const location = useLocation();
  const [pendingScroll, setPendingScroll] = useState(null);
  const [clarificationContext, setClarificationContext] = useState(null);

  // --- NEW: State to hold dynamic blog posts ---
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // ... (Setup speech recognition - unchanged)
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setMicSupported(false);
      setError("Speech recognition not supported in this browser.");
      return;
    }
    const recog = new SpeechRecognition();
    recog.continuous = true;
    recog.interimResults = true;
    recog.lang = "en-US";
    recog.maxAlternatives = 1;
    recognitionRef.current = recog;
  }, []);

  // --- NEW: Effect to fetch and parse the sitemap ---
  useEffect(() => {
    const fetchSitemap = async () => {
      try {
        const response = await fetch("/sitemap.xml"); // Assumes sitemap is in public folder
        const text = await response.text();

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, "text/xml");
        const urls = xmlDoc.getElementsByTagName("loc");

        const posts = [];
        for (const url of urls) {
          const urlString = url.textContent;
          try {
            const urlObject = new URL(urlString);
            const path = urlObject.pathname;

            if (path.startsWith("/blog/") && path.length > 6) {
              // > 6 to ignore "/blog/" itself
              const slug = path.substring("/blog/".length);
              // Convert "my-new-post" to "my new post"
              const title = slug.replace(/-/g, " ").replace(/\/$/, "");
              posts.push({ title: title, path: path });
            }
            // You can add more 'if' blocks here for '/industries/', '/solutions/', etc.
          } catch (e) {
            console.error("Invalid URL in sitemap:", urlString, e);
          }
        }
        setBlogPosts(posts);
        // console.log(
        //   `[VoiceAssistant] Loaded ${posts.length} blog posts from sitemap.`
        // );
      } catch (e) {
        console.error(
          "[VoiceAssistant] Failed to fetch or parse sitemap.xml",
          e
        );
      }
    };

    fetchSitemap();
  }, []);

  useEffect(() => {
    // ... (Pending scroll logic - unchanged)
    if (pendingScroll && location.pathname === "/") {
      const el = document.getElementById(pendingScroll);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          setPendingScroll(null);
        }, 100);
      } else {
        setPendingScroll(null);
      }
    }
  }, [pendingScroll, location.pathname]);

  // Listen handler
  useEffect(() => {
    if (!micSupported || !recognitionRef.current) return;
    const recog = recognitionRef.current;

    if (!tabActive) {
      if (listening) {
        recog.stop();
        setListening(false);
      }
      setStatus(IDLE);
      return;
    }

    const handleResult = (event) => {
      let final = "";
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        const res = event.results[i];
        if (res.isFinal) final += res[0].transcript;
      }
      setTranscript(final);

      const cleaned = final.toLowerCase().trim();
      if (cleaned === "") return; // Don't process empty results

      // --- NEW: Handle clarification first ---
      if (status === AWAIT_CLARIFICATION) {
        // ... (all your clarification logic is unchanged)
        const userAnswer = cleaned;
        let minDistance = Infinity;
        let bestMatch = null;
        for (const section of clarificationContext) {
          const d = getLevenshteinDistance(userAnswer, section.name);
          if (d < minDistance) {
            minDistance = d;
            bestMatch = section;
          }
        }
        const CLARIFICATION_THRESHOLD = 3;
        recog.stop();
        setListening(false);
        setStatus(SPEAKING);
        if (bestMatch && minDistance <= CLARIFICATION_THRESHOLD) {
          const { id: bestId, name: bestName } = bestMatch;
          const currentPath = location.pathname;
          if (currentPath === "/") {
            const el = document.getElementById(bestId);
            if (el) {
              speak(`Okay, jumping to ${bestName}...`);
              setTimeout(() => {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
                setStatus(LISTEN_COMMAND);
              }, 700);
            } else {
              speak(`Found ${bestName} but couldn't scroll.`);
              setTimeout(() => setStatus(LISTEN_COMMAND), 900);
            }
          } else {
            speak(`Okay, navigating to home and jumping to ${bestName}...`);
            setPendingScroll(bestId);
            navigate("/");
            setTimeout(() => setStatus(LISTEN_COMMAND), 700);
          }
        } else {
          speak("Sorry, I didn't understand. Please try your command again.");
          setTimeout(() => setStatus(LISTEN_COMMAND), 1200);
        }
        setClarificationContext(null);
        return;
      }

      // --- Handle new commands (as before) ---
      if (status === LISTEN_COMMAND && final.trim() !== "") {
        const wakeWord = "hey google";
        if (cleaned.startsWith(wakeWord)) {
          const command = cleaned.substring(wakeWord.length).trim();

          // --- "go to" logic is MODIFIED ---
          if (command.startsWith("go to ")) {
            const sectionSpoken = command.replace("go to ", "").trim();
            const matches = [];
            const MATCH_THRESHOLD = 3;
            for (const section of knownSectionsDisplay) {
              const d = getLevenshteinDistance(sectionSpoken, section.name);
              if (d <= MATCH_THRESHOLD) {
                matches.push(section);
              }
            }
            recog.stop();
            setListening(false);
            setStatus(SPEAKING);
            if (matches.length === 0) {
              speak("The Section you requested was not found in the website.");
              setTimeout(() => setStatus(LISTEN_COMMAND), 900);
            } else if (matches.length === 1) {
              const { id: bestId, name: bestName } = matches[0];
              const currentPath = location.pathname;
              if (currentPath === "/") {
                const el = document.getElementById(bestId);
                if (el) {
                  speak(`Jumping to ${bestName}...`);
                  setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                    setStatus(LISTEN_COMMAND);
                  }, 700);
                } else {
                  speak(`Found ${bestName} but couldn't scroll.`);
                  setTimeout(() => setStatus(LISTEN_COMMAND), 900);
                }
              } else {
                speak(`Navigating to home and jumping to ${bestName}...`);
                setPendingScroll(bestId);
                navigate("/");
                setTimeout(() => setStatus(LISTEN_COMMAND), 700);
              }
            } else {
              setClarificationContext(matches);
              const optionsString = matches
                .map((m) => `'${m.name}'`)
                .join(", or ");
              speak(`I found a few sections. Did you mean: ${optionsString}?`);
              setTimeout(() => setStatus(AWAIT_CLARIFICATION), 4000);
            }
            return; // Done with "go to"
          }

          // --- NEW: "open blog" logic (HIGH PRIORITY) ---
          if (
            (command.startsWith("open blog ") ||
              command.startsWith("read blog ")) &&
            blogPosts.length > 0
          ) {
            const blogTitleSpoken = command
              .replace("open blog ", "")
              .replace("read blog ", "")
              .trim();

            let minDistance = Infinity;
            let bestMatch = null;
            const BLOG_MATCH_THRESHOLD = 5; // Allow 5 "mistakes"

            // Fuzzy match against our dynamic blog list
            for (const post of blogPosts) {
              const d = getLevenshteinDistance(blogTitleSpoken, post.title);
              if (d < minDistance) {
                minDistance = d;
                bestMatch = post;
              }
            }

            recog.stop();
            setListening(false);
            setStatus(SPEAKING);

            if (bestMatch && minDistance <= BLOG_MATCH_THRESHOLD) {
              // --- Found a specific blog post ---
              speak(`Opening blog ${bestMatch.title}...`);
              setTimeout(() => {
                navigate(bestMatch.path, { replace: false });
                setStatus(LISTEN_COMMAND);
              }, 900);
            } else {
              // Didn't find a specific post.
              speak("Sorry, I couldn't find a blog post with that title.");
              setTimeout(() => setStatus(LISTEN_COMMAND), 1200);
            }
            return; // Command was handled (or failed)
          }

          // --- Fuzzy match against commandMap (Unchanged) ---
          let minDistance = Infinity;
          let bestMatch = null;
          const MAP_THRESHOLD = 5;
          for (const cmd in commandMap) {
            const distance = getLevenshteinDistance(command, cmd);
            if (distance < minDistance) {
              minDistance = distance;
              bestMatch = cmd;
            }
          }

          if (bestMatch && minDistance <= MAP_THRESHOLD) {
            recog.stop();
            setListening(false);
            setStatus(SPEAKING);

            const action = commandMap[bestMatch];
            if (action === "SCROLL_UP") {
              speak("Scrolling up...");
              setTimeout(() => {
                window.scrollBy(0, -window.innerHeight);
                setStatus(LISTEN_COMMAND);
              }, 700);
            } else if (action === "SCROLL_DOWN") {
              speak("Scrolling down...");
              setTimeout(() => {
                window.scrollBy(0, window.innerHeight);
                setStatus(LISTEN_COMMAND);
              }, 700);
            } else if (typeof action === "string" && action.startsWith("/")) {
              const page = bestMatch
                .replace("open ", "")
                .replace("go to ", "")
                .replace("show ", "");
              speak(`Opening ${page}...`);
              setTimeout(() => {
                navigate(action, { replace: false });
                setStatus(LISTEN_COMMAND);
              }, 750);
            } else {
              speak("The Page you requested was not found in the website.");
              setTimeout(() => setStatus(LISTEN_COMMAND), 800);
            }
          } else if (command === "") {
            recog.stop();
            setListening(false);
            setStatus(SPEAKING);
            speak("Yes, how can I help you? Please say a command.");
            setTimeout(() => setStatus(LISTEN_COMMAND), 900);
          } else {
            recog.stop();
            setListening(false);
            setStatus(SPEAKING);
            speak(
              "I am the AI assistant for this website. I didn't understand that command. Please try again."
            );
            setTimeout(() => setStatus(LISTEN_COMMAND), 800);
          }
        }
      }
    };

    // --- UPDATED handleEnd ---
    const handleEnd = () => {
      setListening(false);
      // Autorestart if we are in a listening state
      if (
        tabActive &&
        (status === LISTEN_COMMAND || status === AWAIT_CLARIFICATION)
      ) {
        try {
          recog.start();
          setListening(true);
        } catch (e) {
          // Handle cases where start() is called too quickly
          console.error("Speech recognition restart error:", e);
          setStatus(IDLE); // Reset to idle on error
        }
      }
    };

    const handleError = (err) => {
      setError((err && err.error) || "Microphone error");
      recog.stop();
      setListening(false);
      setStatus(IDLE);
    };

    recog.onresult = handleResult;
    recog.onend = handleEnd;
    recog.onerror = handleError;

    // Start
    if (
      (status === LISTEN_COMMAND || status === AWAIT_CLARIFICATION) &&
      !listening
    ) {
      setListening(true);
      try {
        recog.start();
      } catch {}
    }
    // Stop
    if ((status === IDLE || status === SPEAKING) && listening) {
      recog.stop();
      setListening(false);
    }
    // Cleanup
    return () => {
      recog.onresult = null;
      recog.onend = null;
      recog.onerror = null;
      if (listening)
        try {
          recog.stop();
        } catch {}
    };
    // eslint-disable-next-line
  }, [
    status,
    tabActive,
    micSupported,
    location,
    navigate,
    blogPosts, // NEW: Add blogPosts to dependency array
    clarificationContext,
  ]);

  // ... (startAssistant, stopAssistant, auto-start useEffect... are unchanged)
  const startAssistant = () => {
    setTranscript("");
    setStatus(LISTEN_COMMAND);
    setError("");
  };

  const stopAssistant = () => {
    setTranscript("");
    setStatus(IDLE);
    setError("");
    setClarificationContext(null); // Also clear context on stop
    if (recognitionRef.current) recognitionRef.current.stop();
  };

  useEffect(() => {
    if (!micSupported) return;
    if (tabActive) {
      startAssistant();
    } else {
      stopAssistant();
    }
    // eslint-disable-next-line
  }, [tabActive, micSupported]);

  return null;
  // --- UPDATED UI ---
  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        background: "#fff",
        border: "1px solid #eee",
        borderRadius: 12,
        padding: 12,
        zIndex: 10000,
        boxShadow: "0px 2px 12px #0001",
        maxWidth: 340,
      }}
    >
      <div style={{ marginBottom: 8 }}>
        <b>Voice Assistant</b>{" "}
        <span style={{ fontSize: "0.9em" }}>
          (
          {micSupported
            ? status === IDLE
              ? "Idle"
              : status === SPEAKING
              ? "Speaking..."
              : status === AWAIT_CLARIFICATION
              ? "Waiting for answer..."
              : "Listening..."
            : "Unsupported"}
          )
        </span>
      </div>
      <div
        style={{
          minHeight: 32,
          fontSize: "0.97em",
          color: status !== IDLE ? "#333" : "#aaa",
        }}
      >
        {error ? (
          <span style={{ color: "#d33" }}>{error}</span>
        ) : status === AWAIT_CLARIFICATION ? (
          "Waiting for your answer..."
        ) : status === LISTEN_COMMAND ? (
          "Listening for command..."
        ) : status === SPEAKING ? (
          "Responding..."
        ) : (
          "Click mic to start listening."
        )}
        {transcript && (
          <div style={{ fontSize: "0.94em", marginTop: 4, color: "#007bff" }}>
            <i>{transcript}</i>
          </div>
        )}
        {clarificationContext && (
          <div style={{ fontSize: "0.9em", marginTop: 4, color: "purple" }}>
            <b>Clarifying:</b>{" "}
            {clarificationContext.map((s) => s.name).join(", ")}
          </div>
        )}
        {/* NEW: Sitemap debug info */}
        {blogPosts.length > 0 && (
          <div style={{ fontSize: "0.8em", marginTop: 4, color: "green" }}>
            Loaded {blogPosts.length} blog posts.
          </div>
        )}
      </div>
      <div style={{ marginTop: 10 }}>
        <button
          onClick={status === IDLE ? startAssistant : stopAssistant}
          disabled={!micSupported}
          style={{
            background: status !== IDLE ? "#e33" : "#2627ff",
            color: "#fff",
            border: 0,
            borderRadius: 7,
            padding: "7px 16px",
            marginRight: 10,
            cursor: "pointer",
          }}
        >
          {status === IDLE ? "Start Listening" : "Stop"}
        </button>
        <span style={{ fontSize: "0.87em", color: "#888" }}>
          {listening ? "Mic On" : "Mic Off"}
        </span>
      </div>
    </div>
  );
}
