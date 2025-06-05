import cookie from "../../../../public/images/COOKIE.jpeg";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import "./Topbar.css";

function Topbar() {
  const { isAuthenticated } = useContext(AuthContext);
  const { getUserEmail } = useContext(AuthContext);
  const userEmail = getUserEmail();

  return (
    <div className="topbar-content">
      <div className="topbar-dashboard-content">
        <div>
          <h2>Dashboard</h2>
          {isAuthenticated && (
            <span className="topbar-dashboard-text">
              Hello {userEmail ? `${userEmail}` : "Not logged in"}, welcome
              back!
            </span>
          )}
          {!isAuthenticated && (
            <span className="topbar-dashboard-text">
              Please log in to access your dashboard.
            </span>
          )}
        </div>
      </div>
      <div className="topbar-search">
        <search>
          <input
            type="text"
            className="topbar-search-input"
            placeholder="Search for events, bookings, and more..."
          />
        </search>
        <div className="topbar-circle">
          <i className="fa-regular fa-bell"></i>
        </div>
        <div className="topbar-circle">
          <i className="fa-regular fa-gear"></i>
        </div>
        <div>
          <img src={cookie} alt="User" className="user-logo" />
        </div>
        <div className="topbar-user">
          <span className="topbar-user-text">
            {userEmail ? `${userEmail}` : "Not logged in"}
          </span>
          <span>Admin</span>
        </div>
      </div>
    </div>
  );
}
export default Topbar;
