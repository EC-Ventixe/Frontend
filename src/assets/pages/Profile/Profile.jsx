import "./Profile.css";

function Profile() {
  return (
    <div className="mainsetup">
      <h2>Profile Edit</h2>
      <div>
        <form>
          <div className="profile-form">
            <label htmlFor="eventName">Firstname</label>
            <input
              placeholder="Enter Your Firstname"
              className="profile-input"
              type="text"
              id="eventName"
              required
            />
          </div>
          <div className="profile-form">
            <label htmlFor="eventName">Lastname</label>
            <input
              placeholder="Enter Your Lastname"
              className="profile-input"
              type="text"
              id="eventName"
              required
            />
          </div>
          <div className="profile-form">
            <label htmlFor="eventName">Address</label>
            <input
              placeholder="Enter Your Address"
              className="profile-input"
              type="text"
              id="eventName"
              required
            />
          </div>
          <div className="profile-form">
            <label htmlFor="eventName">Postalcode</label>
            <input
              placeholder="Enter Your Postalcode"
              className="profile-input"
              type="text"
              id="eventName"
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
}
export default Profile;
