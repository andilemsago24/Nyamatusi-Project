import "./OurStory.css";

export default function OurStory() {
  return (
    <section className="our-story" id="about">
      <div className="story-container">

        <div className="story-content">
          <h1>Our story</h1>

          <div className="story-text">
            <p>
              Nyamatusi Camp is our flagship in terms of its eco-conscious
              style. Our Mana Pools safari lodge is set in one of the wildest
              and most remote parts of Africa, on the banks of the Zambezi,
              one of the world’s oldest rivers. Embracing comfort, this
              property embodies sustainable design.
            </p>

            <p>
              Consisting of six luxury tented suites, with uninterrupted
              views of the river and escarpment beyond, our Mana Pools
              safari lodge invites a blissful escape to nature. Each
              romantic guest tent is adorned with soft drapery and is
              replete with the comforts of home.
            </p>
          </div>

          <button className="enquire-btn">
            Enquire now
          </button>
        </div>

        <div className="story-images">
          <img
            src="/Rectangle 13.png"
            alt="Elephants in the African wilderness"
            className="story-image image-one"
          />

          <img
            src="/Rectangle 12.png"
            alt="African lioness"
            className="story-image image-two"
          />

          <img
            src="/Rectangle 14.png"
            alt="Luxury safari accommodation"
            className="story-image image-three"
          />
        </div>

      </div>
    </section>
  );
}
