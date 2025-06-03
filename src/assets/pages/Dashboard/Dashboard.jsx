import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import EventCards from "../../components/EventCards";
import "../../components/EventCards.css";
import "../Bookings/Bookings.css";
import "./Dashboard.css";

function Dashboard() {
  const url = "https://localhost:7174/api/event/getevents";
  const [data, setData] = useState([]);
  const fetchInfo = async () => {
    return await fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };
  useEffect(() => {
    fetchInfo();
  }, []);

  const sortedData = [...data].sort(
    (a, b) => new Date(b.eventDate) - new Date(a.eventDate)
  );
  return (
    <div className="mainsetup">
      <div className="dashboard-grid">
        <div className="dashboard-header">
          <div>
            <h2>Latest Events</h2>
          </div>
          <div>
            <NavLink className="view-btn" to="/events">
              <span>View All Event</span>
            </NavLink>
          </div>
        </div>
        <div className="dashboard-card-container">
          {sortedData.slice(0, 3).map((dataObj) => (
            <EventCards
              key={dataObj.event.id}
              dataObj={dataObj.event}
              ticket={dataObj.ticket}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
