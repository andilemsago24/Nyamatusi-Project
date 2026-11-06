import React, { useState } from "react";

const galleryItems = [
  { id: "safari-jeep", src: "/Rectangle 51.png", title: "Safari Cruiser", category: "Safari", subtitle: "Open-top game drive vehicle" },
  { id: "elephants-convoy", src: "/Rectangle 52.png", title: "Jeep with Elephants", category: "Wildlife", subtitle: "Herd near the safari jeep" },
  { id: "canoe-safari", src: "/Rectangle 53.png", title: "Person riding boat", category: "Activity", subtitle: "Canoe trip on the Zambezi" },
  { id: "giraffe-golden-hour", src: "/Rectangle 54.png", title: "Giraffe", category: "Wildlife", subtitle: "Towering giraffe at sunset" },
  { id: "acacia-sunset", src: "/Rectangle 55.png", title: "Acacia Sunset", category: "Landscape", subtitle: "Acacia tree against golden sky" },
  { id: "lion-tracks", src: "/Rectangle 56.png", title: "Wildlife Tracks", category: "Wildlife", subtitle: "Animal tracks in the bush" },
  { id: "luxury-tent-suite", src: "/Rectangle 57.png", title: "Luxury Sanctuary Lodge", category: "Accommodation", subtitle: "Luxury tented suite" },
];

function renderCard(item, extraClasses = "", hoveredId, setHoveredId, onSelectItem, showCaptions = false) {
  const isHovered = hoveredId === item.id;

  return (
    <div
      className={`group relative overflow-hidden cursor-pointer ${extraClasses}`}
      onMouseEnter={() => setHoveredId(item.id)}
      onMouseLeave={() => setHoveredId(null)}
      onClick={() => onSelectItem(item)}
      role="button"
      tabIndex={0}
      aria-label={`View photo: ${item.title}`}
    >
      <img
        src={item.src}
        alt={item.title}
        className="w-full h-full object-cover"
        loading="eager"
        style={{ transition: "transform 0.3s ease" }}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent ${showCaptions || isHovered ? "opacity-100" : "opacity-0"} flex flex-col justify-end p-4`}
        style={{
          transition: "opacity 0.3s ease",
          pointerEvents: (showCaptions || isHovered) ? "auto" : "none",
        }}
      >
        <div style={{ transform: isHovered ? "translateY(0)" : "translateY(10px)", transition: "transform 0.3s ease" }}>
          <span style={{
            fontSize: "10px",
            textTransform: "uppercase",
            fontFamily: "monospace",
            letterSpacing: "0.1em",
            color: "#d97706",
            fontWeight: 600,
            display: "block",
            marginBottom: "4px",
          }}>
            {item.category}
          </span>
          <h4 style={{ fontSize: "14px", fontWeight: 300, color: "#ffffff", margin: 0, letterSpacing: "0.05em" }}>
            {item.title}
          </h4>
          <p style={{ fontSize: "11px", color: "#a1a1aa", fontWeight: 300, marginTop: "4px" }}>
            {item.subtitle}
          </p>
        </div>
        <div
          className="absolute top-3 right-3"
          style={{ opacity: isHovered ? 1 : 0, transition: "opacity 0.2s ease" }}
        >
          <span style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.2)",
            color: "#ffffff",
            fontSize: "14px",
          }}>
            ↗
          </span>
        </div>
      </div>
    </div>
  );
}

function GalleryGrid({ onSelectItem, showCaptions = false }) {
  const [hoveredId, setHoveredId] = useState(null);

  const safariJeep = galleryItems.find((i) => i.id === "safari-jeep");
  const elephantsConvoy = galleryItems.find((i) => i.id === "elephants-convoy");
  const canoeSafari = galleryItems.find((i) => i.id === "canoe-safari");
  const giraffe = galleryItems.find((i) => i.id === "giraffe-golden-hour");
  const acaciaSunset = galleryItems.find((i) => i.id === "acacia-sunset");
  const lionTracks = galleryItems.find((i) => i.id === "lion-tracks");
  const luxurySuite = galleryItems.find((i) => i.id === "luxury-tent-suite");

  return (
    <div className="w-full max-w-[1523px] mx-auto" style={{ userSelect: "none" }}>
      <div className="flex flex-col gap-[20px] w-full" style={{ display: "flex", flexDirection: "column", gap: "20px", width: "100%" }}>
        <div
          className="flex flex-col md:flex-row gap-[20px] w-full"
          style={{ aspectRatio: "1523 / 369", display: "flex", width: "100%", gap: "20px" }}
        >
          <div style={{ flex: "793 793 0%", width: "100%", height: "100%", minHeight: "180px" }}>
            {renderCard(safariJeep, "w-full h-full", hoveredId, setHoveredId, onSelectItem, showCaptions)}
          </div>
          <div
            style={{ flex: "710 710 0%", width: "100%", height: "100%", minHeight: "180px", display: "flex", gap: "20px" }}
          >
            <div className="flex-1 h-full" style={{ flex: 1, height: "100%" }}>
              {renderCard(elephantsConvoy, "w-full h-full", hoveredId, setHoveredId, onSelectItem, showCaptions)}
            </div>
            <div className="flex-1 h-full" style={{ flex: 1, height: "100%" }}>
              {renderCard(canoeSafari, "w-full h-full", hoveredId, setHoveredId, onSelectItem, showCaptions)}
            </div>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row gap-[20px] w-full"
          style={{ aspectRatio: "1523 / 369", display: "flex", flexDirection: "column", width: "100%", gap: "20px" }}
        >
          <div
            style={{ flex: "793 793 0%", width: "100%", height: "100%", minHeight: "180px", display: "flex", gap: "20px" }}
          >
            <div className="flex-1 h-full" style={{ flex: 1, height: "100%" }}>
              {renderCard(giraffe, "w-full h-full", hoveredId, setHoveredId, onSelectItem, showCaptions)}
            </div>
            <div className="flex-1 h-full" style={{ flex: 1, height: "100%" }}>
              {renderCard(acaciaSunset, "w-full h-full", hoveredId, setHoveredId, onSelectItem, showCaptions)}
            </div>
            <div className="flex-1 h-full" style={{ flex: 1, height: "100%" }}>
              {renderCard(lionTracks, "w-full h-full", hoveredId, setHoveredId, onSelectItem, showCaptions)}
            </div>
          </div>

          <div style={{ flex: "710 710 0%", width: "100%", height: "100%", minHeight: "180px" }}>
            {renderCard(luxurySuite, "w-full h-full", hoveredId, setHoveredId, onSelectItem, showCaptions)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryGrid;
