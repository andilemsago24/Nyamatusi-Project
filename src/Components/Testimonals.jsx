import React from "react";

function Testimonals() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">Testimonials</h2>

        <div className="testimonials-grid">
          <div className="testimonial-card-image">
            <img
              src="/Rectangle 46.png"
              alt="Jacob Stone enjoying a drink outdoors"
              style={{ opacity: 0.6 }}
            />
          </div>

          <div className="testimonial-card-center">
            <div className="testimonial-avatar">
              <img src="/Ellipse 9.png" alt="Gemma Johnson" />
            </div>

            <blockquote className="testimonial-quote">
              &ldquo; Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor &rdquo;.
            </blockquote>

            <div className="testimonial-divider" />

            <div className="testimonial-name">Gemma Johnson</div>
          </div>

          <div className="testimonial-card-image">
            <img src="/Rectangle 45.png" alt="Brown family" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonals;
