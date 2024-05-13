import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import Home from "pages/UserPages/Home/Home";
import React from "react";
import { Route, Router, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Define All Roles Routers in this File

function AppRouter() {
  const location = useLocation();
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default AppRouter;
