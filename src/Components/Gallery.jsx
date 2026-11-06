import React from "react";

const galleryItems = [
  { image: "/Rectangle 51.png", alt: "Safari Cruiser" },
  { image: "/Rectangle 52.png", alt: "Jeep with Elephants" },
  { image: "/Rectangle 53.png", alt: "Person riding boat" },
  { image: "/Rectangle 54.png", alt: "Giraffe" },
  { image: "/Rectangle 55.png", alt: "Acacia Sunset" },
  { image: "/Rectangle 56.png", alt: "Wildlife Tracks" },
  { image: "/Rectangle 57.png", alt: "Luxury Sanctuary Lodge" },
];

export default function Gallery() {
  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <h1 className="gallery-title">Our gallery</h1>

        <div className="gallery-row">
          <div className="gallery-col-large">
            <img src={galleryItems[0].image} alt={galleryItems[0].alt} className="gallery-img" style={{ objectPosition: "50% 40%" }} />
          </div>
          <div className="gallery-col-split">
            <div className="gallery-col-half">
              <img src={galleryItems[2].image} alt={galleryItems[2].alt} className="gallery-img" style={{ objectPosition: "50% 30%" }} />
            </div>
            <div className="gallery-col-half">
              <img src={galleryItems[3].image} alt={galleryItems[3].alt} className="gallery-img" style={{ objectPosition: "50% 30%" }} />
            </div>
          </div>
        </div>

        <div className="gallery-row">
          <div className="gallery-col-large">
            <div className="gallery-col-split">
              <div className="gallery-col-half">
                <img src={galleryItems[4].image} alt={galleryItems[4].alt} className="gallery-img" style={{ objectPosition: "50% 40%" }} />
              </div>
              <div className="gallery-col-half">
                <img src={galleryItems[6].image} alt={galleryItems[6].alt} className="gallery-img" style={{ objectPosition: "50% 40%" }} />
              </div>
              <div className="gallery-col-half">
                <img src={galleryItems[5].image} alt={galleryItems[5].alt} className="gallery-img" style={{ objectPosition: "50% 50%" }} />
              </div>
            </div>
          </div>
          <div className="gallery-col-split">
            <img src={galleryItems[1].image} alt={galleryItems[1].alt} className="gallery-img" style={{ objectPosition: "50% 40%" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
