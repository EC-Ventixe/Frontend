import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import "./LoginLayout.css";
import ventixelogo from "../../../../public/images/Symbol.svg";

function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const clickLogin = async (e) => {
    e.preventDefault();
    const resp = await fetch(
      "https://ventixeaccountserivceapp.azurewebsites.net/api/account/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );
    if (resp.status === 200) {
      const data = await resp.json();
      login(data.token);
      navigate("/");
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
            <span>LOGIN</span>
          </div>
          <form className="form-group" onSubmit={clickLogin}>
            <div className="login-label">
              <i className="fa-solid fa-user"></i>
              <label htmlFor="email"></label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                placeholder="Email"
                type="text"
                id="email"
                name="email"
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
            <button className="login-btn" type="submit" id="login-btn">
              LOGIN
            </button>
            <div className="login-footer">
              <span>Don't have an account? </span>
            </div>
            <div className="login-footer">
              <NavLink to="/signup" className="login-link">
                Register here
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
