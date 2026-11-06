import { useState } from "react";

const itineraryImages = [
	{
		image: "/Rectangle 38.png",
		alt: "Lodge veranda overlooking the surrounding bush",
	},
	{
		image: "/Rectangle 36.png",
		alt: "Canoe trip on the Zambezi River",
	},
	{
		image: "/Rectangle 37.png",
		alt: "Fishing beside the river at sunset",
	},
];

function Internaries() {
	const [isSaved, setIsSaved] = useState(false);

	return (
		<section className="itineraries-section" id="itineraries">
			<h2 className="itineraries-title">Suggested itineraries</h2>

			<div className="itineraries-grid">
				<article className="itinerary-details">
					<button
						className="itinerary-favorite"
						type="button"
						aria-label={isSaved ? "Remove saved itinerary" : "Save itinerary"}
						aria-pressed={isSaved}
						onClick={() => setIsSaved(!isSaved)}
					>
						{isSaved ? "♥" : "♥"}
					</button>

					<div className="itinerary-copy">
						<h3>Zimbabwe luxury</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
							aliquam, purus sit amet luctus venenatis, lectus magna fringilla
							urna, porttitor.
						</p>
						<ul>
							<li>2 people</li>
							<li>All meals provided</li>
							<li>Luxury transport</li>
						</ul>
					</div>

					<p className="itinerary-price">$3,880 per person</p>
					<a className="itinerary-link" href="#activities">
						<span>See full itinerary</span>
						<span aria-hidden="true">&rarr;</span>
					</a>
				</article>

				{itineraryImages.map(({ image, alt }) => (
					<article className="itinerary-image-card" key={image}>
						<img src={image} alt={alt} />
						<div className="itinerary-image-caption">
							<h3>The best of the Zambezi</h3>
							<p>6 day tour deluxe plan</p>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}

export default Internaries;
