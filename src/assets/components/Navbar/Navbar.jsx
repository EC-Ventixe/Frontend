import { NavLink } from "react-router-dom";
import logo from "../../../../public/images/Symbol.svg";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Events from "../../pages/Events/Events";
import Bookings from "../../pages/Bookings/Bookings";

function Navbar() {
  return (
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
          <NavLink className="nav-item" to="/dashboard">
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
      </ul>
    </div>
  );
}
export default Navbar;
