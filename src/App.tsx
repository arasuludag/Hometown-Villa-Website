import { useEffect } from "react";
import "./App.css";
import AirBNBSection from "./components/AirBNBSection/AirBNBSection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://www.airbnb.com/embeddable/airbnb_jssdk";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <AirBNBSection />
      <Footer />
    </div>
  );
}

export default App;
