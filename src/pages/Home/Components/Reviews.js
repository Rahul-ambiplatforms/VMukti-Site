import React from "react";

const Reviews = () => {
  return (
    <section className="reviews-section" style={{ padding: "60px 0", background: "#f8f9fa" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 15px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px", fontSize: "2rem", color: "#1a1a2e" }}>
          What Our Clients Say
        </h2>
        <div className="reviews-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
          {[
            { name: "Rajesh Kumar", role: "CTO, TechVision India", text: "VMukti video surveillance solutions transformed our security infrastructure with AI-powered analytics.", rating: 5 },
            { name: "Sarah Mitchell", role: "Operations Director, SecureNet", text: "The cloud-based VMS platform is incredibly reliable and scalable across 50+ locations.", rating: 5 },
            { name: "Amit Patel", role: "Security Head, SmartCity Corp", text: "Outstanding computer vision capabilities with best-in-class facial recognition and object detection.", rating: 5 }
          ].map((review, index) => (
            <div key={index} style={{ background: "#fff", borderRadius: "12px", padding: "30px", boxShadow: "0 4px 15px rgba(0,0,0,0.08)" }}>
              <div style={{ display: "flex", marginBottom: "15px" }}>
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} style={{ color: "#ffc107", fontSize: "1.2rem" }}>\u2605</span>
                ))}
              </div>
              <p style={{ color: "#555", lineHeight: "1.6", marginBottom: "20px", fontStyle: "italic" }}>\u201c{review.text}\u201d</p>
              <div>
                <strong style={{ color: "#1a1a2e" }}>{review.name}</strong>
                <p style={{ color: "#888", fontSize: "0.9rem", margin: "4px 0 0" }}>{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
