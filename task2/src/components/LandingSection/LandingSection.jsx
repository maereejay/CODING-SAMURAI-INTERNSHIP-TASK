import "./LandingSection.css";
import Logo from "../Logo/Logo";

export default function LandingSection() {
  return (
    <div className="landingSection">
      <div className="logo-container">
        <div className="logo">
          <Logo />
        </div>
      </div>
      <div className="landingContent">
        <div className="heading">
          <h2>WHERE ARE YOU?</h2>
        </div>
        <div className="input">
          <input type="text" placeholder="Paris, France" />
        </div>
        <div className="button">
          <button>Get your weather forecast</button>
        </div>
      </div>
    </div>
  );
}
