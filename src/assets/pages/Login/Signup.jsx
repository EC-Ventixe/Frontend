import "./LoginLayout.css";
import ventixelogo from "../../../../public/images/Symbol.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const clickLogin = async (e) => {
    e.preventDefault();
    const resp = await fetch("https://localhost:7204/api/account/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (resp.ok) {
      navigate("/login");
    } else {
      const errorText = await resp.text();
      alert(errorText);
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <div className="login-logo">
            <i className="fa-light fa-circle-user"></i>
          </div>
          <div className="login-ventixe-img">
            <div className="img-container">
              <img src={ventixelogo} alt="Ventixe Logo" />
              <span>Ventixe</span>
            </div>
            <div className="ventixe-slogan">
              <span>Click. Book. Party!</span>
            </div>
          </div>
          <div className="login-header">
            <span>SIGN UP</span>
          </div>
          <form className="form-group" onSubmit={clickLogin}>
            <div className="login-label">
              <i className="fa-solid fa-user"></i>
              <label htmlFor="username"></label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                placeholder="Email"
                type="text"
                id="username"
                name="username"
                required
              />
            </div>
            <div className="login-label">
              <i className="fa-solid fa-lock-keyhole"></i>
              <label htmlFor="Password"></label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="input-field"
                placeholder="Password"
                type="Password"
                id="Password"
                name="Password"
                required
              />
            </div>
            <div className="login-label">
              <i className="fa-solid fa-lock-keyhole"></i>
              <label htmlFor="confirmpassword"></label>
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                className="input-field"
                placeholder="Confirm Password"
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                required
              />
            </div>
            <button className="signup-btn" type="submit" id="login-btn">
              CREATE ACCOUNT
            </button>
            <div className="login-footer">
              <span>Already have an account?</span>
            </div>
            <div className="login-footer">
              <NavLink to="/login" className="login-link">
                Login here
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Signup;
