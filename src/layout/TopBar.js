import React from "react";
import { FaUser } from "react-icons/fa";
import logo from "../assets/logo2.PNG";
import "./TopBar.css";
const TopBar = () => {
  return (
    <div className="top-bar-container">
      <h3>Event Manager Application</h3>
      <div>
        <img src={logo} />
      </div>
      <div>
        <h3>
          <FaUser /> Admin
        </h3>
      </div>
    </div>
  );
};

export default TopBar;
