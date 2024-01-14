import React from "react";

import Navbar from "./Navbar";
import "../../App.css";
import SidebarComponent from "../Innersubcontents/Ratefixing/RFSidebar";

const Ratefixinghome = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <SidebarComponent />
      </div>
    </>
  );
};

export default Ratefixinghome;
