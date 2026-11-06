import Navbar from "../Components/Navbar";
import "../App.css";

function Home() {
  return (
    <div className="hero" id="home">
      <Navbar />

      <div className="hero-content">
        
      </div>

      <div className="social-links" aria-label="Social media links">
        <a href="https://facebook.com" aria-label="Facebook">
          
        </a>
        <a href="https://instagram.com" aria-label="Instagram">
          
        </a>
        <a href="https://twitter.com" aria-label="Twitter">
          
        </a>
      </div>

      <a href="#about" className="scroll-down" aria-label="Scroll down">
        <span></span>
      </a>
    </div>
  );
}

export default Home;
