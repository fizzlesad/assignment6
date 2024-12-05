import logo from "../assets/PossumLogo2.png";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div class="opaque-top-rectangle">
      <Link to={`/`}>
        <img class="possum-logo" src={logo} alt="Possum Logo" />
      </Link>
      <p class="title">Possum</p>
      <Link to={`/login`}>
        <button class="sign-in-button">Sign In</button>
      </Link>
      <Link to={`/register`}>
        <button class="sign-up-button">Sign Up</button>
      </Link>
    </div>
  );
}

export default Header;
