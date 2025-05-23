import "./BookingCards.css";
import ticketimg from "../../../../public/images/ticket.svg";
import scancode from "../../../../public/images/scancode.svg";

function BookingCards({ dataObj }) {
  return (
    <div>
      <div>
        <div className="booking-card">
          <div className="card-grid">
            <div className="card-dotted"></div>
            <div className="">
              Event name:{dataObj.event.eventName}
              Location:{dataObj.event.location}
            </div>
            <div className="card-dotted"></div>
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
