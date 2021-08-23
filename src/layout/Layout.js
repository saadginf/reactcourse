import React from "react";
import SideBar from "./SideBar";
import Footer from "./Footer";
import TopBar from "./TopBar";

const Layout = ({ children, user, handlCick }) => {
  return (
    <div>
      <SideBar />
      <TopBar user={user} handlCick={handlCick} />
      <div className="main-container">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
