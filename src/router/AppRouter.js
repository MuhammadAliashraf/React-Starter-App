import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import Home from "pages/UserPages/Home/Home";
import React from "react";

function AppRouter() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default AppRouter;
