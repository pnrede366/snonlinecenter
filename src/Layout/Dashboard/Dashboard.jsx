import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Topnavbar from "../Navbar/chunkss/Topnavbar/Topnavbar";
import Navbar from "../Navbar/Navbar";
import "./dashboard.scss";

const Dashboard = () => {
  const [isFullWidth, setisFullWidth] = useState(false);
  return (
    <div className={isFullWidth ? "dashboard dashboard--grid" : "dashboard "}>
      <Navbar isFullWidth={isFullWidth} setisFullWidth={setisFullWidth} />
      <Outlet/>
    </div>
  );
};

export default Dashboard;
