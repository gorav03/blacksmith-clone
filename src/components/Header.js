// src/components/Header.js
import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">blacksmith</div>
      <nav>
        <a href="#docs">Docs</a>
        <a href="#blog">Blog</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact Us</a>
        <a href="#status">Status</a>
        <button className="login-btn">Login</button>
        <button className="get-started-btn">Get Started</button>
      </nav>
    </header>
  );
}

export default Header;
