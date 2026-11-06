function WildlifeGallery() {
  const wildlife = {
    giraffe: { src: "/Giraffe.png", alt: "Giraffe at sunset" },
    impala: { src: "/Antelope.png", alt: "Two impala" },
    zebras: { src: "/Zebras.png", alt: "Two zebras" },
    elephant: { src: "/Elephant.png", alt: "Elephant in dry grass" },
    wildebeest: { src: "/Wildbeest.png", alt: "Herd of wildebeest" },
    lioness: { src: "/Lion.png", alt: "Lioness yawning" },
  };

  return (
    <section className="wildlife-gallery" id="wildlife">
      <div className="wildlife-container">
        <h1 className="wildlife-title">Recent wildlife sightings</h1>
        <p className="wildlife-text">
          Wildlife sightings include elephant, kudu, sable antelope, zebra,
          wildebeest, the rare and endangered roan antelope, buffalo, lion,
          leopard, hyena, and many other wildlife species.
        </p>

        <div className="wildlife-grid">
          <div className="wildlife-photo wildlife-giraffe">
            <img src={wildlife.giraffe.src} alt={wildlife.giraffe.alt} />
          </div>
          <div className="wildlife-photo wildlife-impala">
            <img src={wildlife.impala.src} alt={wildlife.impala.alt} />
          </div>
          <div className="wildlife-photo wildlife-zebras">
            <img src={wildlife.zebras.src} alt={wildlife.zebras.alt} />
          </div>
          <div className="wildlife-pair">
            <div className="wildlife-photo wildlife-elephant">
              <img src={wildlife.elephant.src} alt={wildlife.elephant.alt} />
            </div>
            <div className="wildlife-photo wildlife-wildebeest">
              <img src={wildlife.wildebeest.src} alt={wildlife.wildebeest.alt} />
            </div>
          </div>
          <div className="wildlife-photo wildlife-lioness">
            <img src={wildlife.lioness.src} alt={wildlife.lioness.alt} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WildlifeGallery;
