import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Logo from "../../assets/Logo.png";
// import Button from "./Button";
// import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-[#2f333a] text-white ">
      <h1>This is Navbar components</h1>
    </nav>
  );
};

export default Navbar;
