
function ActivitiesSection() {
  const activities = [
    {
      title: "Game drives",
      text: "Game drives are what gets us up in the morning in the African bush. They are a great avenue for exploring the land in a safe and exciting way.",
      image: "/Rectangle 16.png",
    },
    {
      title: "Walking safari",
      text: "Experience the African wilderness on foot with expert guides, getting closer to nature and learning about tracks, plants and wildlife.",
      image: "/Rectangle 17.png",
    },
    {
      title: "Bird watching",
      text: "Nyamatusi is a birdwatcher's paradise with diverse species, from fish eagles to colourful bee-eaters along the Zambezi.",
      image: "/Rectangle 18.png",
    },
    {
      title: "Canoeing",
      text: "Paddle along the Zambezi River for a peaceful and thrilling way to view wildlife from a unique perspective.",
      image: "/Rectangle 19.png",
    },
    {
      title: "Fishing",
      text: "Try your hand at catch-and-release tiger fishing on the Zambezi, guided by experienced local anglers.",
      image: "/Rectangle 20.png",
    },
  ];

  return (
    <section id="activities" className="activities-section">
      <div className="activities-header">
        <h1>Our activities</h1>
      </div>

      <div className="activities-container">
        {activities.map(({ title, text, image }) => (
          <article key={title} className="activity-card">
            <img src={image} alt={title} className="activity-image" />
            <div className="activity-body">
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ActivitiesSection;

