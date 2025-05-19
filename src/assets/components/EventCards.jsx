import eventimg from "../../../public/images/sampleevent.jpg";
import React, { useEffect, useState } from "react";

function EventCards({ dataObj }) {
  return (
    <>
      <div className="eventcards">
        <div className="eventcards-img">
          <img className="img" src={eventimg} alt="Event" />
        </div>
        <div className="eventcards-content-grid">
          <div className="eventcards-event-name">
            <div>
              <h3>{dataObj.eventName}</h3>
            </div>
          </div>
          <div className="eventcards-location-city">
            <span>{dataObj.city}</span>
            <span> {dataObj.location}</span>
          </div>
          <div className="eventcards-date-price">
            <div className="event-date">
              <i className="fa-light fa-calendar-lines"></i>
              <span>Apr 25, 2025</span>
            </div>
            <div className="event-price">$30</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default EventCards;
