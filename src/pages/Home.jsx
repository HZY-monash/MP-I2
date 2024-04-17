import "../App.css";
import { useEffect } from "react";

import NavBar from "../components/NavBar";
import MainCarousel from "../components/MainCarousel";
import MainPageInfo from "../components/MainPageInfo";
import Footer from "../components/Footer";

function Home() {
  useEffect(() => {
    document.title = "Composting Hero - Home";
  }, []);

  return (
    <>
      <NavBar />
      <MainCarousel />
      <MainPageInfo />
      <Footer />
    </>
  );
}

export default Home;
