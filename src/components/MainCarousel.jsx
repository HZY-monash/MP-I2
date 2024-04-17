import { useState, useEffect } from "react";
import "./MainCarousel.css"; // Assuming your CSS is adapted for React and imported
import img1 from "../images/img1.jpg";
import img2 from "../images/6840312.jpg";
// import img3 from "../images/img3.jpg";
// import img4 from "../images/img4.jpg";
// import img5 from "../images/img5.jpg";

const ImageSlider = () => {
  const [activeItem, setActiveItem] = useState(0);
  const images = [img1, img2];
  const content = [
    {
      title: "Start your adventure",
      description:
        "Get ready to be a composting superhero. Let's begin your adventure here!",
    },
    {
      title: "Practice and fun!",
      description:
        "Let's play and practice composting together! Get ready to become a composting superhero and have a blast!",
    },
  ];

  const links = ["/knowledge", "/game"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((prevActiveItem) => (prevActiveItem + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveItem((prevActiveItem) => (prevActiveItem + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveItem((prevActiveItem) =>
      prevActiveItem === 0 ? images.length - 1 : prevActiveItem - 1
    );
  };

  const selectSlide = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="slider">
      <div className="list">
        {images.map((img, index) => (
          <div
            key={index}
            className={`item ${index === activeItem ? "active" : ""}`}
          >
            <img src={img} alt={`Slide ${index + 1}`} />
            <a href={links[index]} className="content">
              <p>Compost Hero</p>
              <h2>{content[index].title}</h2>
              <p>{content[index].description}</p>
            </a>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button id="prev" onClick={prevSlide}>
          &lt;
        </button>
        <button id="next" onClick={nextSlide}>
          &gt;
        </button>
      </div>
      <div className="thumbnail">
        {images.map((img, index) => (
          <div
            key={index}
            className={`item ${index === activeItem ? "active" : ""}`}
            onClick={() => selectSlide(index)}
          >
            <img src={img} alt={`Thumbnail ${index + 1}`} />
            {/* <div className="content">Name Slider</div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
