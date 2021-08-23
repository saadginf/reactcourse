import userEvent from "@testing-library/user-event";
import React from "react";
import { Dropdown } from "react-bootstrap";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import logo from "../assets/logo2.PNG";
import "./TopBar.css";
const TopBar = ({ user, handlCick }) => {
  return (
    <div className="top-bar-container">
      <h3>Event Manager Application</h3>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
            <FaUser style={{ cursor: "pointer" }} size="20px" color="white" />
            {"  "}
            {user.sub}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={handlCick}>
              <FaSignOutAlt
                style={{ cursor: "pointer" }}
                size="20px"
                color="#5faeb6"
              />{" "}
              <span>Logout</span>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default TopBar;
