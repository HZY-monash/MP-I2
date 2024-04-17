import { useEffect } from "react";
import "../App.css";
import com_logo from "../assets/com_logo.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Consent() {
  useEffect(() => {
    document.title = "Composting Hero - Consent";
  }, []);
  const handleAccept = () => {
    localStorage.setItem("consent", "accepted");
    window.location.href = "/home";
    // You can perform additional actions here if needed
  };

  const handleDecline = () => {
    localStorage.setItem("consent", "declined");
    toast.error("You need to accept to continue with the site.");
    // You can perform additional actions here if needed
  };

  return (
    <>
      <div className="consent">
        <div className="centered-content">
          <img src={com_logo} alt="Logo" className="logo-consent" />
          <h1>Welcome to our website!</h1>
          <div className="agreement-box">
            <div className="scrollable-content">
              <h2>Consent Form</h2>
              <p>
                Welcome to the Compost Hero. This interactive platform is
                dedicated to teaching children about composting through fun and
                engaging lessons, challenges, and activities.
              </p>
              <p>
                By Accepting This Consent Form, You Agree To:
                <ul>
                  <li>
                    Allow your child to participate in the Composting Hero
                    Journey's learning activities.
                  </li>
                  <li>
                    Enable the platform to track your child's progress, which
                    includes their completion of educational modules,
                    participation in challenges, and the achievements (if
                    applicable) they unlocked.
                  </li>
                </ul>
              </p>
              <h2>Privacy Policy</h2>
              <p>Our Commitment to Your Child’s Privacy</p>
              <p>
                Information Collected:
                <ul>
                  <li>Educational modules completed</li>
                  <li>Points earned</li>
                  <li>
                    Composting activities completed (e.g., collecting scraps,
                    adding to compost bin)
                  </li>
                  <li>Achievements unlocked (if applicable)</li>
                </ul>
              </p>
              <p>
                Purpose of Data Collection:
                <ul>
                  <li>
                    Motivate and encourage them in their composting journey
                  </li>
                  <li>Create a fun and engaging experience for your child</li>
                  <li>
                    Generate reports for you (the parent) to track their
                    progress
                  </li>
                </ul>
              </p>
              <p>
                Data Sharing and Security:
                <ul>
                  <li>
                    We do not share, sell or rent your child's personal
                    information with any third parties.
                  </li>
                  <li>We take the security of your child's data seriously.</li>
                  <li>
                    We have implemented security measures to protect the data
                    collected. The data is anonymised and the access is limited
                    to authorised personnel only.
                  </li>
                </ul>
              </p>
              <p>
                Data Retention:
                <ul>
                  <li>
                    We retain your child's information for as long as you are
                    actively using the Super-Family Alliance program. You can
                    request to have it deleted at any time.
                  </li>
                </ul>
              </p>
              <p>
                Children's Privacy:
                <ul>
                  <li>
                    We are committed to protecting the privacy of children. We
                    do not knowingly collect any personal identifiable
                    information from children under the age of 13 without
                    parental consent.
                  </li>
                </ul>
              </p>
              <p>
                Your Rights:
                <ul>
                  <li>
                    Withdraw your consent at any time by clearing the cookies or
                    by contacting us
                  </li>
                  <li>Access and update your child's information</li>
                  <li>Request deletion of your child's information</li>
                </ul>
              </p>
              <p>
                Changes to This Consent Form:
                <ul>
                  <li>
                    We may update this consent form periodically. We will notify
                    you of any changes by posting the revised version here.
                  </li>
                  <li>This Privacy Policy was last updated on 7 April 2024.</li>
                </ul>
              </p>
            </div>
          </div>
          <p>Please choose one of the following options:</p>
          <div className="options">
            <button className="accept-btn" onClick={handleAccept}>
              Accept
            </button>
            <button className="decline-btn" onClick={handleDecline}>
              Decline
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Consent;
