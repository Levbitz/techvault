import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

function NavbarWrap() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      style={{
        zIndex: 9999,
      }}
    >
      <Navbar toggle={toggle} />

      <Sidebar isOpen={isOpen} toggle={toggle} />
    </div>
  );
}

export default NavbarWrap;
