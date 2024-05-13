import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import UserPagesLayout from "components/UserPagesLayout/UserPagesLayout";
import About from "pages/UserPages/About/About";
import Contactus from "pages/UserPages/Contactus/Contactus";
import Home from "pages/UserPages/Home/Home";
import Login from "pages/UserPages/Login/Login";
import Register from "pages/UserPages/Register/Register";
import { Route, Routes, useLocation } from "react-router-dom";

// Define All Roles Routers in this File

function AppRouter() {
  const location = useLocation();
  return (
    <>
      {!location.pathname.startsWith("/login") &&
        !location.pathname.startsWith("/register") && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <UserPagesLayout>
              <Home />
            </UserPagesLayout>
          }
        />
        <Route
          path="/contact-us"
          element={
            <UserPagesLayout>
              <Contactus />
            </UserPagesLayout>
          }
        />
        <Route
          path="/about"
          element={
            <UserPagesLayout>
              <About />
            </UserPagesLayout>
          }
        />
      </Routes>
      {!location.pathname.startsWith("/login") &&
        !location.pathname.startsWith("/register") && <Footer />}
    </>
  );
}

export default AppRouter;
