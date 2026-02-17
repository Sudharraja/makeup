import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import portfolio from "../../data/portfolio.json";

export default function Portfolio() {
  const [index, setIndex] = useState(-1);

  return (
    <section id="portfolio" className="section">
      <h2 className="text-center text-4xl md:text-5xl font-serif mb-14">
        Featured Bridal Looks
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
        {portfolio.map((item, i) => (
          <div
            key={item.id}
            onClick={() => setIndex(i)}
            className="overflow-hidden rounded-2xl cursor-pointer group"
          >
            <img
              src={item.image}
              alt={item.category}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={portfolio.map(p => ({ src: p.image }))}
      />
    </section>
  );
}
