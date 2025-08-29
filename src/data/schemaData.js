
const schemaData = {
  homepage: [
    // WebPage Schema
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "AI Computer Vision System for Smart Surveillance - Vmukti Solutions",
      description: "Vmukti Solutions is a trusted computer vision software company. We are offering AI surveillance for healthcare, education, manufacturing and more industries.",
      url: "https://www.vmukti.com/",
      datePublished: "2006-11-10",
      dateModified: "2025-05-05",
      publisher: {
        "@type": "Organization",
        name: "VMukti Solutions",
        url: "https://www.vmukti.com/",
        logo: {
          "@type": "ImageObject",
          url: "https://www.vmukti.com/assets/vmuktilogo.png",
          width: 25,
          height: 6,
        },
        sameAs: [
          "https://www.facebook.com/VMuktisolutions",
          "https://www.instagram.com/vmuktisolutions/",
          "https://www.linkedin.com/company/vmuktisolutions",
          "https://x.com/VMukti",
          "https://www.youtube.com/@VMukti1",
        ],
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://www.vmukti.com/assets/tablet1.webp",
        width: 174,
        height: 123,
        caption: "Computer Vision & Surveillance Solution",
      },
      inLanguage: "en-US",
    },

    // Organization Schema
    {
      "@context": "http://schema.org",
      "@type": "Organization",
      name: "VMukti Solutions",
      url: "https://www.vmukti.com/",
      logo: "https://www.vmukti.com/assets/vmuktilogo.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-968-777-0000",
        email: "contact@vmukti.com",
        contactType: "Sales",
        areaServed: "Global",
      },
      sameAs: [
        "https://www.facebook.com/VMuktisolutions",
        "https://www.instagram.com/vmuktisolutions/",
        "https://www.linkedin.com/company/vmuktisolutions",
        "https://x.com/VMukti",
        "https://www.youtube.com/@VMukti1",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "7, Arista@Eight Corporate House, Near Satyam House, Behind Rajpath Club, Bodakdev",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        postalCode: "380054",
        addressCountry: "IN",
      },
      foundingDate: "2007",
      description: "VMukti Solutions Pvt. Ltd. provides smart video surveillance across India for 16+ years with over 900+ projects across varied domains. Powered by EdgeAI, CloudAI and GenAI technologies, We offer complete end-to-end solutions including Live Webcasting, VMS, EMS, ICCC, Custom CCTV Cameras, VisualBot APIs, and Flying Squad Vehicle Monitoring. Our in-house R&D develops tailored innovations for unique client needs. We support diverse industries, meeting needs and driving success across sectors. Using Computer Vision models we provide proactive management and smart Video Monitoring. All our offerings comply with standards like CE, ISO, FCC, and RoHS. With reliability, and innovation, we are redefining the future of intelligent surveillance.",
    },

    // LocalBusiness Schema
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "VMukti Solutions",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
        streetAddress: "7, Arista@Eight Corporate House, Near Satyam House, Behind Rajpath Club, Bodakdev",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        postalCode: "380054",
      },
      pricerange: "$$$",
      email: "contact@vmukti.com",
      telephone: "+91-968-777-0000",
      openingHours: "Mo,Tu,We,Th,Fr,Sa 09:30-18:30",
      openingHoursSpecification: [{
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:30",
        closes: "18:30",
      }],
      geo: {
        "@type": "GeoCoordinates",
        latitude: "23.037684",
        longitude: "72.503439",
      },
      image: "https://www.vmukti.com/assets/vmuktilogo.png",
    },

    // FAQ Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      url: "https://www.vmukti.com/",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do you provide APIs for custom integrations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, We provide robust APIs to enable custom integrations with your business systems, mobile apps, or control rooms. Your video surveillance software can use our API’s to adapt to your operational needs for maximum flexibility.",
          },
        },
        {
          "@type": "Question",
          name: "How well does our AI Solutions integrate with third-party security systems?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our Vision AI seamlessly integrates with your existing VMS, access control, and incident response ecosystem—no disruption, just pure operational synergy. Designed for enterprise-grade scalability, it fits right into your infrastructure with zero compromise.",
          },
        },
        {
          "@type": "Question",
          name: "What kind of support does VMukti Solutions offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "From zero-latency rollout to real-time AI tuning across edge nodes, our support ecosystem is designed for scale and speed. VMukti gives you hyper-responsive assistance for global NOC coverage, auto-recovery triggers, and adaptive learning support models. Whether it’s deploying vision intelligence across 1 or 1,000 sites, we move with your ambition.",
          },
        },
        {
          "@type": "Question",
          name: "What makes VMukti Solutions different from other surveillance providers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "VMukti Solutions combines real-time threat detection, predictive analytics, and seamless integration with VMS, EMS, and ICCC. Our AI computer vision solution is powered by advanced software for delivering smarter, faster, and reliable surveillance than traditional CCTV.",
          },
        },
      ],
    },
  ],
};

export default schemaData;