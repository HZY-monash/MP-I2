import "./Footer.css";

import com_logo from "../assets/com_logo.png";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container mb--32 footer-layout">
          <a href="#" className="footer-logo">
            <img
              className="footer-logo-image"
              alt="Compost logo"
              src={com_logo}
            />
            <p className="footer-logo-title">Compost Hero</p>
          </a>

          <p className="team-info">TP32 :)</p>

          {/* <div className="nav-col">
            <p className="footer-heading">Contact us</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="tel:415-201-6370">
                  415-201-6370
                </a>
              </li>
              <li>
                <a className="footer-link" href="mailto:hello@compost.com">
                  zhua0110@student.monash.edu
                </a>
              </li>
            </ul>
          </div> */}

          {/* <div className="nav-col">
            <p className="footer-heading">Binary Brewers</p>
            <ul className="footer-nav">
              <li>
                <a
                  className="footer-link"
                  href="https://docs.google.com/document/d/1V6Unzeb8N5BMpP-i6N7JI-tRHNoqPc-0loE9RKmTUrM/edit#heading=h.a6c3snx0qk6g"
                >
                  About Us
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Join Us
                </a>
              </li>
            </ul>
          </div> */}
        </div>
        <div>
          <p className="copyright">
            Copyright &copy;2024 by Compost, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
