import AddEventOverlay from "../../components/AddEvent";

function Events() {
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
            <AddEventOverlay />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Events;
