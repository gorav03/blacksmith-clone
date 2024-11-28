// src/components/HeroSection.js
import React from "react";
import "../styles/HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <h1>GitHub Actions<br />Twice as fast. Half the cost.</h1>
      <p>
        Speed up your GitHub Actions with a 
        <a href="#code-change"> one-line code change</a>, by running them on
        high-performance gaming CPUs instead of GitHub's older server hardware.
      </p>
      <button className="hero-button">Get Started</button>
      <p className="hero-note">3,000 free minutes per month. No credit card required.</p>
    </section>
  );
}

export default HeroSection;
