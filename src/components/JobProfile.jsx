// src/components/JobProfile.jsx
import React, { useEffect, useState } from "react";

const getTimeWithZone = () => {
  const date = new Date();
  const options = {
    hour:   "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZoneName: "short",
    timeZone: "Asia/Kolkata" // adjust to your own if needed
  };
  return date.toLocaleTimeString("en-IN", options);
};

export default function JobProfile() {
  const [time, setTime] = useState(getTimeWithZone());

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeWithZone()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        backgroundImage: "url('/Background.jpg')", // change to your filename
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "blur(0)", // Outer wrapper unblurred; inner overlay will blur.
      }}
    >
      {/* Blurred Overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          background: "inherit",
          filter: "blur(8px) brightness(0.7)",
          pointerEvents: "none"
        }}
      />
      {/* Timezone Clock */}
      <div
        style={{
          position: "fixed",
          top: 20,
          right: 40,
          zIndex: 2,
          background: "rgba(0,0,0,0.54)",
          color: "#fff",
          padding: "8px 18px",
          borderRadius: "20px",
          fontSize: 16,
          fontFamily: "monospace",
          letterSpacing: 1,
          boxShadow: "0 2px 8px #0005"
        }}
      >
        {time}
      </div>
      {/* Main Content */}
      <main
        style={{
          maxWidth: 600,
          margin: "60px auto",
          fontFamily: "sans-serif",
          position: "relative",
          background: "rgba(255,255,255,0.82)",
          padding: 32,
          borderRadius: 20,
          zIndex: 1,
          boxShadow: "0 4px 32px #0004",
        }}
      >
        {/* Profile Image */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 24,
          }}
        >
          <img
            src="/Profile.jpg"
            alt="Sachin Yaganti"
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid #e6e6e6",
              boxShadow: "0 2px 8px #0002",
              marginBottom: 16,
            }}
          />
        </div>
        <h1>Hi Everyone! I'm Sachin Yaganti</h1>
        <h2>Frontend Developer</h2>
        <section>
          <h3>About Me</h3>
          <p>
            Passionate frontend developer with 2+ years experience building fast, accessible, and delightful web apps using React, Vite, and modern JavaScript.
          </p>
        </section>
        <section>
          <h3>Skills</h3>
          <ul>
            <li>React</li>
            <li>Vite</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>HTML5, CSS</li>
            <li>REST APIs, Git</li>
          </ul>
        </section>
        <section>
          <h3>Experience</h3>
          <ul>
            <li>
              <strong>Frontend Developer</strong> (2024–Now)
              <br />
              Built reusable components and optimized dashboard apps for speed using Vite + React.
            </li>
            <li>
              <strong>Web Developer</strong> at Alchemist Studios (2023–2024)
            </li>
          </ul>
        </section>
        <section>
          <h3>Contact</h3>
          <p>Email: 2300032331@kluniversity.in</p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/sachinyaganti"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#222", textDecoration: "underline" }}
            >
              Sachin_Yaganti
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}
