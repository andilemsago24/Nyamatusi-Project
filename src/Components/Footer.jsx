import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#E75317", color: "#ffffff" }} className="w-full">
      <div style={{ maxWidth: "1920px", margin: "0 auto", padding: "80px 80px 50px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px" }}>
          <div>
            <h3 style={{ fontSize: "25px", fontStyle: "italic", fontWeight: 700, marginBottom: "36px", letterSpacing: "0.5px" }}>
              Useful information
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "20px" }}><a href="#" style={{ color: "#ffffff", textDecoration: "none", fontSize: "20px" }}>Travel information</a></li>
              <li style={{ marginBottom: "20px" }}><a href="#" style={{ color: "#ffffff", textDecoration: "none", fontSize: "20px" }}>Safari logistics</a></li>
              <li style={{ marginBottom: "20px" }}><a href="#" style={{ color: "#ffffff", textDecoration: "none", fontSize: "20px" }}>Privacy policy</a></li>
              <li style={{ marginBottom: "20px" }}><a href="#" style={{ color: "#ffffff", textDecoration: "none", fontSize: "20px" }}>Terms and conditions</a></li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: "25px", fontStyle: "italic", fontWeight: 700, marginBottom: "36px", letterSpacing: "0.5px" }}>
              Sitemap
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "20px" }}><a href="#home" style={{ color: "#ffffff", textDecoration: "none", fontSize: "20px" }}>Home</a></li>
              <li style={{ marginBottom: "20px" }}><a href="#about" style={{ color: "#ffffff", textDecoration: "none", fontSize: "20px" }}>About</a></li>
              <li style={{ marginBottom: "20px" }}><a href="#itineraries" style={{ color: "#ffffff", textDecoration: "none", fontSize: "20px" }}>Suggested itenaries</a></li>
              <li style={{ marginBottom: "20px" }}><a href="#gallery" style={{ color: "#ffffff", textDecoration: "none", fontSize: "20px" }}>Gallery</a></li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: "25px", fontStyle: "italic", fontWeight: 700, marginBottom: "36px", letterSpacing: "0.5px" }}>
              Get in touch
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "20px" }}><a href="#" style={{ color: "#ffffff", textDecoration: "none", fontSize: "20px" }}>Plan your safari</a></li>
              <li style={{ marginBottom: "20px" }}><a href="#" style={{ color: "#ffffff", textDecoration: "none", fontSize: "20px" }}>Contact us</a></li>
              <li style={{ marginBottom: "20px" }}><a href="#" style={{ color: "#ffffff", textDecoration: "none", fontSize: "20px" }}>Careers</a></li>
            </ul>
          </div>
          <div style={{ maxWidth: "567px" }}>
            <h3 style={{ fontSize: "25px", fontStyle: "italic", fontWeight: 700, marginBottom: "36px", letterSpacing: "0.5px" }}>
              Sign up for our newsletter
            </h3>
            <form style={{ display: "flex", width: "100%", height: "66px" }}>
              <input type="email" placeholder="Email" style={{ flex: 1, background: "#ffffff", color: "#1a1a1a", border: "none", padding: "0 24px", fontSize: "20px", outline: "none" }} />
              <button type="submit" style={{ backgroundColor: "#000000", color: "#ffffff", border: "none", padding: "0 36px", fontSize: "21px", fontStyle: "italic", fontWeight: 600, cursor: "pointer" }}>Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div style={{ width: "100%", borderTop: "1px solid #ffffff" }} />
      <div style={{ width: "100%", padding: "24px 20px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M14.83 14.83a4 4 0 1 1 0-5.66" strokeWidth="2.2" />
        </svg>
        <span style={{ fontSize: "18px" }}>Copyright 2022 Nyamatusi camp. All rights reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
