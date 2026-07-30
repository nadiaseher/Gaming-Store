import "./Hero.css";
import { useState, useEffect } from "react";

import gta5 from "../assets/gta.jpg";
import cyberpunk from "../assets/cyberpunk.webp";
import fc25 from "../assets/fc25.jpg";
import cod from "../assets/cod.jpg";

function Hero() {
  const images = [gta5, cyberpunk, fc25, cod];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="hero-content">
        <h1>Discover Your Next Favorite Game</h1>

        <p>
          Explore the latest PC, PlayStation, Xbox and Nintendo games at the
          best prices.
        </p>

        <button>Shop Now</button>
      </div>
    </section>
  );
}

export default Hero;