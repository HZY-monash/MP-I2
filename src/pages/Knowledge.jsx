import Navbar from "../components/NavBar";

import "bootstrap/dist/css/bootstrap.min.css";

import kl11 from "../images/kl-1-1.jpg";
import kl22 from "../images/kl-2-2.png";
import kl31 from "../images/kl-3-1.png";
import kl32 from "../images/kl-3-2.png";

import "./Knowledge.css";
import { useState, useEffect } from "react";

import Footer from "../components/Footer";

export default function Knowledge() {
  const [ctgIndex, setCtgIndex] = useState(0);
  const [klIndex, setKlIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    document.title = "Composting Hero - Knowledge";
  }, []);

  const [contentVisibility, setContentVisibility] = useState(
    "right-kl-content-visible"
  );

  const content = [
    [
      [
        "The Magic of Composting!",
        "Composting is like magic for turning food scraps and other natural stuff into super soil! It's when we put things like fruit peels, leaves, and even eggshells in a special box or pile and let nature do its thing. After a while, all that stuff turns into a special kind of dirt that helps plants grow big and strong!",
      ],
      [
        "Why Composting Is Cool!",
        "Composting is awesome because it helps us make less trash and keeps our air, land, and water clean! Plus, it gives us free plant food for our gardens, which is super cool! And guess what? It's even fun to watch all the wiggly worms help out in the compost pile!",
      ],
    ],
    [
      [
        "Understanding Greens and Browns:",
        "Greens are nitrogen-rich materials that help feed the microorganisms in your compost pile. Examples include vegetable scraps, fruit waste, coffee grounds, and grass clippings. Browns are carbon-rich materials that add bulk and help control moisture and odor in your compost pile. Examples include leaves, straw, wood chips, and shredded newspaper.",
      ],
      [
        "The Importance of Balance:",
        "Nitrogen (greens) acts as a protein source or food for the microbes that break down the compost. Carbon (browns) serves as an energy source for the microbes, keeping them healthy and active. An imbalance can slow down the composting process or lead to odor problems. Too much green material can cause the pile to become too wet and smelly, while too much brown material can slow down the decomposition process.",
      ],
    ],
    [
      [
        "Recognizing Ready Compost ",
        "Appearance and Texture: Mature compost looks like dark, crumbly soil. It should have a uniform texture, with no recognizable food or yard waste materials visible, except for a few exceptions like twigs or avocado pits which take longer to break down. Color: The compost will be dark brown, a sign that the organic material has fully decomposed and is packed with nutrients. Smell: Ready compost smells earthy and pleasant, not sour or like rotting garbage. If your compost has a bad odor, it might need more time to decompose or a better balance of materials.",
      ],
      [
        "Using Your Compost",
        "In the Garden Beds: Mix the compost into your garden beds before planting to enrich the soil. The compost adds essential nutrients, improves soil structure, and helps retain moisture, which are all beneficial for plant growth. Around Trees and Shrubs: Spread the compost around the base of trees and shrubs as a mulch. It will slowly release nutrients into the soil, suppress weeds, and help retain soil moisture. In Plant Pots: Use the compost to pot plants or as a top dressing for potted plants. Mixing compost with potting soil can enhance the nutrient content and water retention of the soil, promoting healthier potted plants.",
      ],
    ],
  ];

  const imgs = [
    [
      kl11,
      "https://th.bing.com/th/id/OIP.xNcb1ZBpyVdr5EqnV-RSnQHaE8?rs=1&pid=ImgDetMain",
    ],
    [
      kl22,
      "https://recyclecoach.com/wp-content/uploads/2022/07/25-1024x1024.png",
    ],
    [kl31, kl32],
  ];

  function ctgClkick1() {
    setContentVisibility("right-kl-content-hidden");
    setTimeout(() => {
      setCtgIndex(0);
      setKlIndex(0);
      setContentVisibility("right-kl-content-visible");
    }, 500);
  }

  function ctgClkick2() {
    setContentVisibility("right-kl-content-hidden");
    setTimeout(() => {
      setCtgIndex(1);
      setKlIndex(0);
      setContentVisibility("right-kl-content-visible");
    }, 500);
  }

  function ctgClkick3() {
    setContentVisibility("right-kl-content-hidden");
    setTimeout(() => {
      setCtgIndex(2);
      setKlIndex(0);
      setContentVisibility("right-kl-content-visible");
    }, 500);
  }

  function klNextClick() {
    if (klIndex == 1) {
      return null;
    }
    setTimeout(() => {
      setAnimationClass("fade-in-animation");
      setKlIndex((prevKlIndex) => (prevKlIndex < 1 ? prevKlIndex + 1 : 1));
      setTimeout(() => setAnimationClass(""), 500);
    }, 500);
  }

  function klPrevClick() {
    if (klIndex == 0) {
      return null;
    }
    setTimeout(() => {
      setAnimationClass("fade-in-animation");
      setKlIndex((prevKlIndex) => (prevKlIndex > 0 ? prevKlIndex - 1 : 0));
      setTimeout(() => setAnimationClass(""), 500);
    }, 500);
  }

  function handleClickContent() {}

  return (
    <>
      <Navbar />
      <div className="kl-container">
        <div className="kl-ctgs">
          <div className="kl-ctg" onClick={ctgClkick1}>
            <img src={kl11} alt="" className="kl-img" />
            <p>Start with the Basics</p>
          </div>
          <div className="kl-ctg" onClick={ctgClkick2}>
            <img src={kl22} alt="" className="kl-img" />
            <p>Managing Your Compost</p>
          </div>
          <div className="kl-ctg" onClick={ctgClkick3}>
            <img src={kl31} alt="" className="kl-img" />
            <p>Harvesting Your Compost</p>
          </div>
        </div>

        <div className={`${contentVisibility} right-kl-content`}>
          <div className={`kl-content-layout ${animationClass}`}>
            <div className="kl-content" onClick={handleClickContent}>
              <img
                src={imgs[ctgIndex][klIndex]}
                alt="this is a img"
                className="kl-content-img"
              />
              <div className="kl-title">{content[ctgIndex][klIndex][0]}</div>
              <div className="kl-text">{content[ctgIndex][klIndex][1]}</div>
            </div>
          </div>

          <button className="kl-btn kl-btn--left" onClick={klPrevClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="kl-btn-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="kl-btn kl-btn--right" onClick={klNextClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="kl-btn-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="dots">
            {content[ctgIndex].map((_, index) => (
              <button
                key={index}
                className={`dot ${index === klIndex ? "dot--fill" : ""}`}
              >
                &nbsp;
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="video-title">Youtube Video</div>
        <div className="video-container">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/YZACISkbFpU?si=lV_zXEUjSc8MzokC"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/oFlsjRXbnSk?si=41TcTluc6XCJ0rTw"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/LxQ3Gm7iZsY?si=pLSO-sDUdyICNRvv"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
