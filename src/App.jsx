import Home from "./Pages/Home";
import About from "./Pages/About";
import ActivitiesSection from "./Pages/Activites";
import Hero from "./Components/Hero";
import Internaries from "./Components/Internaries";
import Testimonals from "./Components/Testimonals";
import Gallery from "./Components/Gallery";
import WildlifeGallery from "./Components/WildlifeGallery";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Home />
      <About />
      <ActivitiesSection />
      <WildlifeGallery />
      <Internaries />
      <Hero />
      <Testimonals />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
