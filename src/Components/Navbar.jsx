
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        Nyamatusi
      </a>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#about">About</a>
        <a href="#activities">Activities</a>
        <a href="#itineraries">Itineraries</a>
        <a href="#reviews">Reviews</a>
        <a href="#gallery">Gallery</a>
      </div>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default Navbar;
