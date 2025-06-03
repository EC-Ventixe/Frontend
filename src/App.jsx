import { BrowserRouter, Outlet, Route, Router, Routes } from "react-router-dom";
import "./App.css";

import Events from "./assets/pages/Events/Events";
import Bookings from "./assets/pages/Bookings/Bookings";
import Dashboard from "./assets/pages/Dashboard/Dashboard";
import Signup from "./assets/pages/Login/Signup";
import Layout from "./Layout";
import Login from "./assets/pages/Login/Login";
import BookingsOverlay from "./assets/components/Modals/BookingModal";
import Profile from "./assets/pages/Profile/Profile";

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
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
