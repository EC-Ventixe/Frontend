import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./BookingModal.css";

function BookingModal({ dataObj }) {
  const [isOverlayBooking, setIsOverlayBooking] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ eventId: dataObj.id, userId: "" });
  const { getUserId } = useContext(AuthContext);

  const toggleOverlay = () => {
    setIsOverlayBooking(!isOverlayBooking);
  };

  useEffect(() => {
    if (!isOverlayBooking) return;
    const id = getUserId();
    fetchUserId(id);
  });

  const fetchUserId = async (id) => {
    try {
      const resp = await fetch(
        `https://ventixeaccountserivceapp.azurewebsites.net/api/account/getuser/${id}`
      );

      if (resp.ok) {
        const data = await resp.json();
        setFormData((prev) => ({
          ...prev,
          userId: data.id,
        }));
      }
    } catch (error) {
      console.error("Error fetching user ID:", error);
    }
  };

  const postBooking = async () => {
    const response = await fetch(
      "https://ventixebookingserviceapp.azurewebsites.net/api/booking/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    if (response.ok) {
      navigate("/bookings");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toggleOverlay();
    await postBooking();
  };

  return (
    <div>
      <button className="booking-btn" onClick={toggleOverlay}>
        Book this Event
      </button>

      {isOverlayBooking && (
        <div className="booking-overlay">
          <div className="booking-overlay-content">
            <button className="close-btn" onClick={toggleOverlay}>
              Close
            </button>
            <h2>Your Ticket for</h2>
            <div className="form-layout">
              <form onSubmit={handleSubmit}>
                <div>
                  <div>
                    <span>
                      Event <br></br>
                      {dataObj.eventName}
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Location <br></br>
                      {dataObj.city}, {dataObj.location}
                    </span>
                  </div>
                  <button className="booking-submit-btn " type="submit">
                    Comfirm and Pay
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

export default BookingModal;
