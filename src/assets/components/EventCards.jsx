import eventimg from "../../../public/images/sampleevent.jpg";
import "../components/Modals/BookingModal.css";
import BookingModal from "./Modals/BookingModal";

function EventCards({ dataObj, ticket }) {
  let dateStr = "";
  let timeStr = "";
  if (dataObj.startDate) {
    const dateObj = new Date(dataObj.startDate);
    dateStr = dateObj.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    timeStr = dateObj.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  }
  return (
    <>
      <div className="eventcards">
        <div className="eventcards-img">
          <div className="eventcards-booking-btn">
            <div>
              <BookingModal dataObj={dataObj} />
            </div>
          </div>
          <img className="img" src={eventimg} alt="Event" />
        </div>
        <div className="eventcards-content-grid">
          <div className="eventcards-date-time">
            {dateStr} {timeStr && `- ${timeStr}`}
          </div>
          <div className="eventcards-event-name">
            <div>
              <h3>{dataObj.eventName}</h3>
            </div>
            <div className="eventcards-location-city">
              <i className="fa-light fa-location-dot"></i>
              <span>{dataObj.city}, </span>
              <span> {dataObj.location} </span>
            </div>
          </div>

          <div className="eventcards-tickets-price">
            <div className="event-tickets-left">
              <span>Tickets Left ({ticket.ticketsleft})</span>
            </div>
            <div className="event-price">
              <div>${ticket.ticketPrice}</div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
export default EventCards;
