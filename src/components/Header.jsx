import logo from "../assets/PossumLogo2.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useStoreContext } from "../context";

function Header() {
  const { firstName } = useStoreContext();
  let { email } = useStoreContext();
  const navigate = useNavigate();

  const loginButtons = () => {
    if (email == "") {
      return (
        <>
          <Link to={`/login`}>
            <button className="sign-in-button">Sign In</button>
          </Link>
          <Link to={`/register`}>
            <button className="sign-up-button">Sign Up</button>
          </Link>
        </>
      )
    } else {
      return (
        <>
          <p>{`Hello ${firstName}!`}</p>
          <button onClick={() => navigate("/cart")}>Cart</button>
          <button onClick={() => navigate("/settings")}>Settings</button>
          <Link to={`/`}>
            <button className="logout-button" onClick={email==""}>Logout</button>
          </Link>
        </>
      )
    }
  }

  return (
    <div class="opaque-top-rectangle">
      <Link to={`/`}>
        <img class="possum-logo" src={logo} alt="Possum Logo" />
      </Link>
      <p class="title">Possum</p>
      <div className="choice-side">
        {loginButtons()}
      </div>
    </div>
  );
}

export default Header;
