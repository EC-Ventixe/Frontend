import "./BookingModal.css";

function ProfilePromptModal({ onClose }) {
  return (
    <div className="booking-overlay">
      <div className="booking-overlay-content">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h2>Welcome!</h2>
        <p>
          Please fill out your information in <b>Your Profile</b> to complete
          your registration.
        </p>
      </div>
    </div>
  );
}

export default ProfilePromptModal;
