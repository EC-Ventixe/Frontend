import { BrowserRouter, Outlet, Route, Router, Routes } from "react-router-dom";
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
