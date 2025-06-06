import AddEventOverlay from "../../components/AddEvent";
import EventCards from "../../components/EventCards";
import { useEffect, useState } from "react";
import "./Events.css";

function Events() {
  const [data, setData] = useState([]);
  const url =
    "https://ventixeeventserviceapp.azurewebsites.net/api/event/getevents";
  const fetchInfo = async () => {
    return await fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };
  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div>
      <div className="mainsetup">
        <span></span>
        <div className="event-btns">
          <div className="event-btn">
            <span>Active</span>
            <span className="event-btn-nr">(48)</span>
          </div>
          <div className="event-btn">
            <span>Draft</span>
            <span className="event-btn-nr">(22)</span>
          </div>
          <div className="event-btn">
            <span>Past</span>
            <span className="event-btn-nr">(32)</span>
          </div>
          <div className="add-event-btn">
            <AddEventOverlay fetchinfo={fetchInfo} />
          </div>
        </div>
        <div className="event-head-container">
          {data.map((dataObj) => (
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
export default Events;
