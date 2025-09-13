// File: src/containers/profile/Profile.js

import React from "react";
import Contact from "../contact/Contact";
import { openSource, socialMediaLinks } from "../../portfolio";
import myProfilePic from "../../assets/images/dorkar.png"; // Your uploaded image

export default function Profile() {
  if (openSource.display) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "3rem 0",
          padding: "1rem",
          maxWidth: "1000px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {/* Left Text Section */}
        <div style={{ flex: 1, paddingRight: "2rem" }}>
          <h1 style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>
            Reach Out to me!
          </h1>
          <p
            style={{
              color: "#888",
              textTransform: "uppercase",
              fontSize: "1rem",
              marginBottom: "1rem",
            }}
          >
            Discuss a project or just want to say hi? My inbox is open for all.
          </p>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "1.3rem",
              marginTop: "1rem",
              color: "#fff",
            }}
          >
            "Full Stack Developer || Learning Enthusiasts || Open Source Contributor"
          </p>
          <p style={{ fontSize: "1rem", margin: "0.5rem 0" }}>
            <span role="img" aria-label="location">📍</span> Remote
          </p>
          <p style={{ fontSize: "1rem" }}>Open for opportunities: Yes</p>

          {/* Social Media Icons */}
          <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem" }}>
            {socialMediaLinks.github && (
              <a href={socialMediaLinks.github} target="_blank" rel="noreferrer">
                <i className="fab fa-github fa-2x" style={{ color: "#fff" }}></i>
              </a>
            )}
            {socialMediaLinks.linkedin && (
              <a href={socialMediaLinks.linkedin} target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin fa-2x" style={{ color: "#0A66C2" }}></i>
              </a>
            )}
            {socialMediaLinks.gmail && (
              <a href={`mailto:${socialMediaLinks.gmail}`} target="_blank" rel="noreferrer">
                <i className="fas fa-envelope fa-2x" style={{ color: "#EA4335" }}></i>
              </a>
            )}
            {socialMediaLinks.facebook && (
              <a href={socialMediaLinks.facebook} target="_blank" rel="noreferrer">
                <i className="fab fa-facebook fa-2x" style={{ color: "#1877F2" }}></i>
              </a>
            )}
            {socialMediaLinks.medium && (
              <a href={socialMediaLinks.medium} target="_blank" rel="noreferrer">
                <i className="fab fa-medium fa-2x" style={{ color: "#fff" }}></i>
              </a>
            )}
            {socialMediaLinks.stackoverflow && (
              <a href={socialMediaLinks.stackoverflow} target="_blank" rel="noreferrer">
                <i className="fab fa-stack-overflow fa-2x" style={{ color: "#F48024" }}></i>
              </a>
            )}
          </div>
        </div>

        {/* Right Image Section */}
        <div>
          <img
            src={myProfilePic}
            alt="My Profile"
            style={{
              borderRadius: "50%",
              width: "220px", // Increased size
              height: "220px",
              objectFit: "cover",
              border: "5px solid #6366F1", // Purple border
            }}
          />
        </div>
      </div>
    );
  } else {
    return <Contact />;
  }
}
