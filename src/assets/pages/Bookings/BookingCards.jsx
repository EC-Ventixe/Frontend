import "./BookingCards.css";
import ticketimg from "../../../../public/images/ticket.svg";
import scancode from "../../../../public/images/scancode.svg";

function BookingCards({ dataObj }) {
  let dateStr = "";
  let timeStr = "";
  if (dataObj.event.startDate) {
    const dateObj = new Date(dataObj.event.startDate);
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
    <div>
      <div>
        <div className="booking-card">
          <div className="card-grid">
            <div className="card-dashed"></div>
            <div className="card-info">
              <div className="bg-event-box"></div>
              <div className="card-name">
                <h3>{dataObj.event.eventName}</h3>
                <span>{dataObj.event.eventDescription}</span>
              </div>
              <div className="card-ticket-name">
                <h5>Name</h5>
                <span></span>
              </div>
              <div className="card-id">
                <h5>Id</h5>
                <span>{dataObj.id}</span>
              </div>
              <div className="card-ticket-category">
                <h5>Ticket Category</h5>
                <span>Premium</span>
              </div>
              <div className="card-location">
                <h5>Location</h5>
                <span>
                  {dataObj.event.location}, {dataObj.event.city}
                </span>
              </div>
              <div className="card-date-time">
                <div className="card-date">
                  <h5>Date</h5>
                  <span>{dateStr}</span>
                </div>
                <div className="card-time">
                  <h5>Time</h5>
                  <span>{timeStr && ` ${timeStr}`}</span>
                </div>
              </div>
              <div className="card-line"></div>
            </div>

            <div className="card-dashed2"></div>
            <div className="card-dot-right1"></div>
            <div className="card-dot-right2"></div>
            <div className="card-dot-left1"></div>
            <div className="card-dot-left2"></div>
            <div className="scan-code">
              <img src={scancode} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BookingCards;
