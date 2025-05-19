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
      <div className="login-hero">
        <div className="ventixe-logo">
          <div>
            <img className="ventixe-logo-img" src={ventixelogo}></img>
          </div>
          <div>
            <h1>Ventixe</h1>
          </div>
        </div>
        <div className="login-container">
          <div className="login-form">
            <div className="login-header">
              <div className="login-logo">
                <i className="fa-light fa-circle-user"></i>
              </div>
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
      </div>
    </>
  );
}
export default Signup;
