import { useState } from "react";
import "./DNDGame.css";
import dndLogo from "../assets/dnd-logo.png";
import bananaPeels from "../assets/banana-peels.png";
import sodaCans from "../assets/soda-cans.png";

const items = [
  {
    id: "bananaPeel",
    name: "Banana Peel",
    type: "compost",
    img: bananaPeels,
  },
  {
    id: "sodaCan",
    name: "Soda Can",
    type: "recycle",
    img: sodaCans,
  },
  {
    id: "plasticBag",
    name: "Plastic Bag",
    type: "garbage",
    img: "https://bloximages.chicago2.vip.townnews.com/pressofatlanticcity.com/content/tncms/assets/v3/editorial/6/06/6061267c-5267-55fb-977e-d90a5fb7aa05/5af0d1cbf1b37.image.jpg?resize=1200,1348",
  },
  {
    id: "eggShell",
    name: "Egg Shell",
    type: "compost",
    img: "https://th.bing.com/th/id/OIP.hkIhfzVABkNZo998Hx0xcQHaE5?rs=1&pid=ImgDetMain",
  },
];

function DragDropGame() {
  const [score, setScore] = useState(0);
  // Track correctly placed items
  const [correctlyPlacedItems, setCorrectlyPlacedItems] = useState([]);
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const showTemporaryPopup = (message, duration = 2000) => {
    setPopupMessage(message);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, duration);
  };

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData("text/plain", item.type);
    e.dataTransfer.setData("id", item.id); // Track the ID of the dragged item
  };

  const handleDrop = (e, binType) => {
    e.preventDefault();
    const itemType = e.dataTransfer.getData("text/plain");
    const itemId = e.dataTransfer.getData("id");

    if (itemType === binType && !correctlyPlacedItems.includes(itemId)) {
      setCorrectlyPlacedItems((prevItems) => [...prevItems, itemId]);
      setScore((prevScore) => prevScore + 1);
      showTemporaryPopup("Correct!", 1500);

      if (correctlyPlacedItems.length + 1 === items.length) {
        setTimeout(
          () =>
            showTemporaryPopup("Well Done! Your score: " + (score + 1), 6000),
          0
        );
      }
    } else {
      showTemporaryPopup("Oops! Try again.", 1500);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <main className="game-bg">
      <header className="dnd-game-header">
        <img src={dndLogo} alt="" className="dnd-logo" />
        <h1>Drag & Drop</h1>
      </header>
      <div className="game-container ">
        <h2>Drag the item into the correct bin:</h2>
        <div className="dnd-items">
          {items.map((item) => {
            if (!correctlyPlacedItems.includes(item.id)) {
              return (
                <div
                  key={item.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, item)}
                  className="dnd-item"
                >
                  <p className="dnd-item-name">{item.name}</p>
                  <img src={item.img} alt={item.name} className="item-img" />
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="bins">
          <div
            onDrop={(e) => handleDrop(e, "compost")}
            onDragOver={handleDragOver}
            className="bin"
          >
            Compost
          </div>
          <div
            onDrop={(e) => handleDrop(e, "recycle")}
            onDragOver={handleDragOver}
            className="bin"
          >
            Recycle
          </div>
          <div
            onDrop={(e) => handleDrop(e, "garbage")}
            onDragOver={handleDragOver}
            className="bin"
          >
            Garbage
          </div>
        </div>
        <div>Score: {score}</div>
        {showPopup && (
          <div
            style={{
              fontSize: "2.4rem",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            {popupMessage}
          </div>
        )}
      </div>
    </main>
  );
}

export default DragDropGame;
