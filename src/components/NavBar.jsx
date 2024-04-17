import { FaBars, FaTimes } from "react-icons/fa";

import com_logo from "../assets/com_logo.png";
import "./NavBar.css";
import { useRef } from "react";

function Header() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <a className="main-nav-link" href="/home">
        <img className="logo" alt="Logo" src={com_logo} />
      </a>
      <nav ref={navRef}>
        <a className="main-nav-link" href="home">
          Home
        </a>

        <a className="main-nav-link" href="knowledge">
          Knowledge
        </a>

        <a className="main-nav-link" href="game">
          Game Hub
        </a>

        <a className="main-nav-link" href="recognition" hidden>
          Recognition
        </a>

        <a className="main-nav-link" href="visual">
          Visualization
        </a>

        <a className="main-nav-link" href="test" hidden>
          Test
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>

      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Header;
