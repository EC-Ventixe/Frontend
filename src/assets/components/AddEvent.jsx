import React, { useState } from "react";

function AddEventOverlay() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleOverlay();
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
                  <label htmlFor="Date">Date</label>
                  <input
                    className="form-input"
                    type="date"
                    id="Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Time">Time</label>
                  <input
                    className="form-input"
                    type="time"
                    id="Time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                  />
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
                  <label htmlFor="Date">Price</label>
                  <input
                    className="form-input"
                    placeholder="$0.00"
                    type="number"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
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
