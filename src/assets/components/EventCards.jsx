import eventimg from "../../../public/images/sampleevent.jpg";
import "../components/Modals/BookingModal.css";
import BookingModal from "./Modals/BookingModal";

function EventCards({ dataObj }) {
  let dateStr = "";
  let timeStr = "";
  if (dataObj.startDate) {
    const dateObj = new Date(dataObj.startDate);
    dateStr = dateObj.toLocaleDateString();
    timeStr = dateObj.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
  return (
    <>
      <div className="eventcards">
        <div className="eventcards-img">
          <div className="eventcards-booking-btn">
            <BookingModal dataObj={dataObj} />
          </div>
          <img className="img" src={eventimg} alt="Event" />
        </div>
        <div className="eventcards-content-grid">
          <div className="eventcards-event-name">
            <div>
              <h3>{dataObj.eventName}</h3>
            </div>
          </div>
          <div className="eventcards-location-city">
            <span>{dataObj.city}, </span>
            <span> {dataObj.location} </span>
          </div>
          <div className="eventcards-date-price">
            <div className="event-date">
              <i className="fa-light fa-calendar-lines"></i>
              <span>
                {dateStr} {timeStr && `| ${timeStr}`}
              </span>
            </div>
            <div className="event-price">$30</div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
export default EventCards;
