import { BrowserRouter, Outlet, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import "./assets/components/Navbar/navbar.css";
import "./assets/components/Topbar/topbar.css";
import "./assets/components/Footer/footer.css";
import "./assets/pages/Events/events.css";
import "./assets/components/addEvent.css";
import "./assets/pages/Dashboard/dashboard.css";
import Events from "./assets/pages/Events/Events";
import Bookings from "./assets/pages/Bookings/Bookings";
import Dashboard from "./assets/pages/Dashboard/Dashboard";
import Signup from "./assets/pages/Login/Signup";
import Layout from "./Layout";
import Login from "./assets/pages/Login/Login";
import BookingsOverlay from "./assets/components/Modals/BookingModal";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/events" element={<Events />} />
            <Route path="/bookingModal/" element={<BookingsOverlay />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/bookings" element={<Bookings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
