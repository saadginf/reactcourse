import React from "react";
import "./Home.css";
import homeimg from "../assets/home.png";

const Home = () => {
  return (
    <div className="home-container">
      <img src={homeimg} alt="home-photo" width="800px" />
      <div>
        <a href="/add" className="home-page-link">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Home;
