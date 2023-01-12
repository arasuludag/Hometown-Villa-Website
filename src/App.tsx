import "./App.css";
import AirBNBSection from "./components/AirBNBSection/AirBNBSection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import GoogleMaps from "./components/GoogleMaps";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <AirBNBSection />
      <GoogleMaps />
      <Footer />
    </div>
  );
}

export default App;
