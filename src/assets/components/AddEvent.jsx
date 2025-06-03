import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddEvent.css";

function AddEventOverlay({ fetchinfo }) {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [eventName, setEventName] = useState("");
  const [eventDescription, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  const [startdate, setStartDate] = useState("");
  const [enddate, setEndDate] = useState("");
  const [ticketstarttime, setTicketStartTime] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");
  const [ticketAmount, setTicketAmount] = useState("");
  const navigate = useNavigate();

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toggleOverlay();
    const eventData = {
      eventName,
      eventDescription,
      location,
      city,
      startdate,
      enddate,
      ticketstarttime,
      ticketPrice,
      ticketAmount,
    };
    console.log("Event Data:", eventData);
    const resp = await fetch("https://localhost:7174/api/event/addevent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    });

    if (resp.ok) {
      fetchinfo();
      navigate("/events");
    }
  };

  return (
    <div>
      <button className="event-btn" onClick={toggleOverlay}>
        + Add Event
      </button>

      {isOverlayVisible && (
        <div className="overlay">
          <div className="overlay-content">
            <button className="close-btn" onClick={toggleOverlay}>
              Close
            </button>
            <h2>Add Event</h2>
            <div className="form-layout">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="eventName">Event</label>
                  <input
                    placeholder="Enter Event Name"
                    className="form-input"
                    type="text"
                    id="eventName"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    className="form-input"
                    placeholder="Enter Description for Event"
                    id="description"
                    value={eventDescription}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="Date">Location</label>
                  <input
                    className="form-input"
                    placeholder="Enter Location for Event"
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="City">City</label>
                  <input
                    className="form-input"
                    placeholder="Enter City for Event"
                    type="text"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="startdate">Start Date</label>
                  <input
                    className="form-input"
                    type="datetime-local"
                    id="startdate"
                    value={startdate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="enddate">End Date</label>
                  <input
                    className="form-input"
                    type="datetime-local"
                    id="enddate"
                    value={enddate}
                    onChange={(e) => setEndDate(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="ticketstarttime">Ticket Start Time</label>
                  <input
                    className="form-input"
                    type="datetime-local"
                    id="ticketstarttime"
                    value={ticketstarttime}
                    onChange={(e) => setTicketStartTime(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="ticketprice">Ticket Price</label>
                  <input
                    className="form-input"
                    placeholder="Enter Price for Ticket"
                    type="number"
                    id="ticketPrice"
                    value={ticketPrice}
                    onChange={(e) => setTicketPrice(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="ticketamount">
                    Amount of Tickets for Event
                  </label>
                  <input
                    className="form-input"
                    placeholder="Enter amount of tickets for Event"
                    type="number"
                    id="TicketAmount"
                    value={ticketAmount}
                    onChange={(e) => setTicketAmount(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <button className="submit-btn" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddEventOverlay;
