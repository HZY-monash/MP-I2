import { motion, useAnimation } from "framer-motion";
import com_logo from "../assets/com_logo.png";
import blur from "../images/bg-blur-cp.png";
import { useEffect, useState } from "react";

const Animate = () => {
  const [loading, setLoading] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    document.title = "Composting Hero";
  }, []);

  useEffect(() => {
    const animateSplashScreen = async () => {
      await controls.start({
        rotate: 360,
        opacity: 1,
        transition: { duration: 3 },
      });
      await controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: 0.5 },
      });
      setLoading(false);
      const consentStatus = localStorage.getItem("consent");
      if (consentStatus === "accepted") {
        setTimeout(() => {
          window.location.href = "/home"; // Redirect to home page ("/home") if consent is accepted
        }, 500);
      } else {
        setTimeout(() => {
          window.location.href = "/consent"; // Redirect to consent page ("/consent") if consent is not accepted or not found
        }, 500);
      }
    };

    animateSplashScreen();
  }, [controls]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${blur})`,
        backgroundSize: "cover",
      }}
    >
      {loading ? (
        <>
          <motion.div animate={controls} initial={{ rotate: 0, opacity: 0 }}>
            <motion.img
              src={com_logo}
              alt="Logo"
              style={{ width: 200, height: 200, justifySelf: "center" }}
            />
          </motion.div>
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 3 } }}
            style={{
              fontFamily: "Comic-San",
              fontSize: 24,
              fontWeight: "bold",
              color: "#000",
              marginTop: 10,
              textAlign: "center",
            }}
          >
            <p>Compost Hero</p>
          </motion.div>
        </>
      ) : null}
    </div>
  );
};

export default Animate;
