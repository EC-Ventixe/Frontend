import App from "../../../App";
import { NavLink } from "react-router-dom";
import EventCards from "../../components/EventCards";
import "../../components/EventCards.css";

function Dashboard() {
  return (
    <div className="mainsetup">
      <div className="dashboard-header">
        <div>
          <h3>All Events</h3>
        </div>
        <div>
          <NavLink className="view-btn" to="/events">
            <span>View All Event</span>
          </NavLink>
        </div>
      </div>
      <div>
        <EventCards />
      </div>
    </div>
  );
}
export default Dashboard;
