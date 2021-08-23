import React from "react";
import "./Home.css";
import homeimg from "../assets/home.png";

const Home = () => {
  return (
    <div className="home-container">
      <h2>REdux test</h2>
      <img src={homeimg} alt="welcome" width="800px" />
      <div>
        <a href="/add" className="home-page-link">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Home;
