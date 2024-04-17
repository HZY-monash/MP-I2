import { useEffect } from "react";
import NavBar from "../components/NavBar";
import "./GameHub.css";

export default function GameHub() {
  useEffect(() => {
    document.title = "Composting Hero - Game Hub";
  }, []);

  return (
    <>
      <NavBar />
      <div className="games-container">
        <div className="game" hidden>
          <a href="game/dnd">
            <div className="game-flex">
              <img src="" alt="this is dnd game" />
              <p>Composting Drag and Drop</p>
            </div>
          </a>
        </div>

        <div className="game">
          <a href="quiz1">
            <div className="game-flex">
              <img
                src="https://www.kidsdogardening.com/wp-content/uploads/2020/10/What-to-compost.jpeg"
                alt="this is Quiz"
                className="quiz-img"
              />
              <p>Quiz: Building Your Compost</p>
            </div>
          </a>
        </div>

        <div className="game">
          <a href="quiz2">
            <div className="game-flex">
              <img
                src="https://www.kidsdogardening.com/wp-content/uploads/2020/12/AdobeStock_338952971-scaled-e1607861895430.jpeg"
                alt="this is Quiz"
                className="quiz-img"
              />
              <p>Quiz: Managing Your Compost</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
