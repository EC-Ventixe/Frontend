import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
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
import Navbar from "./assets/components/Navbar/navbar";
import Topbar from "./assets/components/Topbar/Topbar";
import Footer from "./assets/components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="hero">
          <div className="sidenav">
            <Navbar />
          </div>

          <div className="topnav">
            <Topbar />
          </div>
          <div className="main">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/events" element={<Events />} />
              <Route path="/bookings" element={<Bookings />} />
            </Routes>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
