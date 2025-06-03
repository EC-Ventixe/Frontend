import { NavLink } from "react-router-dom";
import logo from "../../../../public/images/Symbol.svg";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext.jsx";
import "./Navbar.css";

function Navbar() {
  const { isAuthenticated, logout, login } = useContext(AuthContext);
  return (
    <div className="sidenav-container">
      <div>
        <div className="logo-content">
          <a href="/dashboard">
            <img src={logo} alt="Logo" />
          </a>
          <div>
            <h2>Ventixe</h2>
          </div>
        </div>
        <ul className="nav-content">
          <li>
            <NavLink className="nav-item" to="/">
              <i className="fa-light fa-grid-2"></i>
              <span className="nav-btn">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-item" to="/events">
              <i className="fa-light fa-ticket-perforated"></i>
              <span className="nav-btn">Events</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-item" to="/bookings">
              <i className="fa-light fa-square-check"></i>
              <span className="nav-btn"> Bookings</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-item" to="/profile">
              <i class="fa-light fa-user"></i>
              <span className="nav-btn"> Your Profile</span>
            </NavLink>
          </li>
        </ul>
      </div>
      {isAuthenticated && (
        <NavLink to="/" className="signout-btn" onClick={logout}>
          <i className="fa-regular fa-arrow-right-from-bracket"></i>
          <span>Sign Out</span>
        </NavLink>
      )}
      {!isAuthenticated && (
        <NavLink to="/login" className="signout-btn">
          <i className="fa-regular fa-arrow-right-from-bracket"></i>
          <span>Sign In</span>
        </NavLink>
      )}
    </div>
  );
}
export default Navbar;
