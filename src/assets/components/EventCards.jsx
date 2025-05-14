import eventimg from "../../../public/images/sampleevent.jpg";

function EventCards() {
  return (
    <div>
      <div className="eventcards">
        <div className="eventcards-img">
          <img className="img" src={eventimg} alt="Event" />
        </div>
        <div>
          <div>Date</div>
          <div>$price</div>
        </div>
      </div>
    </div>
  );
}
export default EventCards;
