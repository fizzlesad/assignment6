import "./RegisterView.css";
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function RegisterView(props) {
  return (
    <>
      <Header />
      <div className="register-container">
        <div className="form-container">
          <h2>Create an Account</h2>
          <form action="#" method="POST">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />

            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              required
            />

            <div className="genres-list">
              <ul>
                {props.genres.map((item) => {
                  return (
                    <div key={item.id} className = "checkbox">
                    <input type="checkbox" id={item.id}></input>
                    <label htmlFor={item.id}>{item.genre}</label>
                    </div>
                  );
                })}
              </ul>
            </div>

            <button type="submit" className="register-button">
              Register
            </button>
          </form>
          <Link to={`/login`}>
            <p className="login-link">
              Already have an account? <a href="#">Login</a>
            </p>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RegisterView;
