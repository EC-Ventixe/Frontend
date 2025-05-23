import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import BookingCards from "../Bookings/BookingCards";

function Bookings() {
  const { getUserId } = useContext(AuthContext);
  const userId = getUserId();

  const bookingsUrl = "https://localhost:7093/api/booking/all";
  const eventUrl = "https://localhost:7174/api/event/getevent";

  const [userBookings, setUserBookings] = useState([]);
  const [bookingsWithEvent, setBookingsWithEvent] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const res = await fetch(bookingsUrl);
      const allBookings = await res.json();
      const filtered = allBookings.filter((b) => b.userId === userId);
      setUserBookings(filtered);
    };
    fetchBookings();
  }, [userId]);

  useEffect(() => {
    const fetchEvents = async () => {
      const results = await Promise.all(
        userBookings.map(async (booking) => {
          const res = await fetch(`${eventUrl}/${booking.eventId}`);
          if (res.ok) {
            const text = await res.text();
            if (text) {
              const eventData = JSON.parse(text);
              return { ...booking, event: eventData };
            }
          } else {
            console.warn(`Event not found for ID: ${booking.eventId}`);
          }
          return { ...booking, event: null };
        })
      );
      setBookingsWithEvent(results);
    };
    if (userBookings.length > 0) {
      fetchEvents();
    }
  }, [userBookings]);

  return (
    <div>
      <div className="mainsetup">
        <h2>Your Bookings</h2>
        {bookingsWithEvent.length === 0 ? (
          <p>No bookings found.</p>
        ) : (
          <div className="bookings-list">
            {bookingsWithEvent.map((dataObj) => (
              <BookingCards key={dataObj.id} dataObj={dataObj} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Bookings;
