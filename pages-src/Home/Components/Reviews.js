'use client';
import React, { useState, useEffect } from "react";

const reviews = [
  { name: "Rajesh Kumar", role: "CTO, TechVision India", text: "VMukti video surveillance solutions transformed our security infrastructure with AI-powered analytics.", rating: 5 },
  { name: "Sarah Mitchell", role: "Operations Director, SecureNet", text: "The cloud-based VMS platform is incredibly reliable and scalable across 50+ locations.", rating: 5 },
  { name: "Amit Patel", role: "Security Head, SmartCity Corp", text: "Outstanding computer vision capabilities with best-in-class facial recognition and object detection.", rating: 5 },
  { name: "Priya Sharma", role: "IT Manager, UrbanSafe Ltd", text: "Seamless integration with our existing CCTV infrastructure. The AI alerts have reduced incident response time by 60%.", rating: 5 },
  { name: "David Chen", role: "VP Security, GlobalBank", text: "Best-in-class multi-site management. We monitor 200+ branches from a single dashboard effortlessly.", rating: 5 },
];

function useVisibleCount() {
  const [count, setCount] = useState(3);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setCount(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return count;
}

const Reviews = () => {
  const [start, setStart] = useState(0);
  const VISIBLE = useVisibleCount();

  const prev = () => setStart((s) => (s === 0 ? reviews.length - VISIBLE : s - 1));
  const next = () => setStart((s) => (s + VISIBLE >= reviews.length ? 0 : s + 1));

  const visible = reviews.slice(start, start + VISIBLE);

  const ArrowBtn = ({ onClick, label, children }) => (
    <button
      onClick={onClick}
      aria-label={label}
      style={{
        flexShrink: 0,
        width: "40px", height: "40px",
        borderRadius: "50%",
        border: "2px solid #3F77A5",
        background: "#fff",
        color: "#3F77A5",
        fontSize: "1.4rem",
        cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "background 0.2s, color 0.2s",
      }}
      onMouseEnter={e => { e.currentTarget.style.background = "#3F77A5"; e.currentTarget.style.color = "#fff"; }}
      onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#3F77A5"; }}
    >
      {children}
    </button>
  );

  return (
    <section
      style={{ margin: "32px 0", padding: "48px 16px", background: "#ffffff", borderRadius: "24px" }}
      aria-label="Client testimonials"
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ marginTop: 0, textAlign: "center", marginBottom: "32px", fontSize: "clamp(1.4rem, 4vw, 2rem)", color: "#1a1a2e" }}>
          What Our Clients Say
        </h2>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <ArrowBtn onClick={prev} label="Previous testimonials">‹</ArrowBtn>

          <div style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: `repeat(${VISIBLE}, 1fr)`,
            gap: "16px",
          }}>
            {visible.map((review, i) => (
              <div
                key={start + i}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "20px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.09)",
                  display: "flex", flexDirection: "column",
                }}
              >
                <div style={{ display: "flex", marginBottom: "10px" }}>
                  {[...Array(review.rating)].map((_, j) => (
                    <span key={j} style={{ color: "#ffc107", fontSize: "1.1rem" }}>★</span>
                  ))}
                </div>
                <p style={{ color: "#555", lineHeight: "1.7", marginBottom: "16px", fontStyle: "italic", flex: 1, fontSize: "0.95rem" }}>
                  "{review.text}"
                </p>
                <div>
                  <strong style={{ color: "#1a1a2e" }}>{review.name}</strong>
                  <p style={{ color: "#888", fontSize: "0.875rem", margin: "4px 0 0" }}>{review.role}</p>
                </div>
              </div>
            ))}
          </div>

          <ArrowBtn onClick={next} label="Next testimonials">›</ArrowBtn>
        </div>

        {/* Dots */}
        <div
          role="tablist"
          aria-label="Testimonial page navigation"
          style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "24px" }}
        >
          {reviews.map((_, i) => {
            const isActive = i >= start && i < start + VISIBLE;
            return (
              <button
                key={i}
                role="tab"
                aria-selected={isActive}
                aria-label={`Testimonial ${i + 1}`}
                onClick={() => setStart(Math.min(i, reviews.length - VISIBLE))}
                style={{
                  width: isActive ? "24px" : "10px",
                  height: "10px",
                  borderRadius: "5px",
                  border: "none",
                  background: isActive ? "#3F77A5" : "#ccc",
                  cursor: "pointer",
                  padding: 0,
                  transition: "width 0.3s, background 0.3s",
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
