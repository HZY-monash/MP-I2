import "./MainPageInfo.css";

import girl from "../assets/girl.png";

export default function MainPageInfo() {
  return (
    <div className="container grid grid--2-cols grid--center-v">
      <div className="info-text-box">
        <h3 className="heading-tertiary">Why we need composting?</h3>
        <p className="info-description">
          Composting is awesome because it helps us make less trash and keeps
          our air, land, and water clean! Plus, it gives us free plant food for
          our gardens, which is super cool! And guess what? It is even fun to
          watch all the wiggly worms help out in the compost pile!
        </p>
        <a href="/knowledge" className="btn btn--info">
          Learn More
        </a>
      </div>
      <div className="info-img-box">
        <img src={girl} className="info-img" />
      </div>
    </div>
  );
}
