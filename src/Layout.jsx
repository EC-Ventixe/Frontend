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
import Navbar from "./assets/components/Navbar/Navbar";
import Topbar from "./assets/components/Topbar/Topbar";
import Footer from "./assets/components/Footer/Footer";

function Layout() {
  return (
    <div className="container">
      <div className="hero">
        <div className="sidenav">
          <Navbar />
        </div>
        <div className="topnav">
          <Topbar />
        </div>
        <div className="main">
          <Outlet />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
