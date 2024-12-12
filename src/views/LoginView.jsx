import React from "react";
import "./LoginView.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useStoreContext } from "../context/index.jsx";

function LoginView() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setEmail } = useStoreContext();

  function login(e) {
    e.preventDefault();
    if (password === "iloveyou") {
      navigate("/movies");
      setEmail(e.target.email.value);
    } else {
      alert("Wrong password!");
    }
  }

  return (
    <>
      <Header />
      <div className="login-container">
        <div className="form-container">
          <h2>Login to Your Account</h2>
          <form
            onSubmit={(event) => {
              login(event);
            }}
          >
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              required
            />

            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          <Link to={`/register`}>
            <p className="register-link">
              New to Possum? <a href="#">Register now</a>
            </p>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LoginView;
