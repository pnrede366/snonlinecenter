import React from "react";
import "./topnavbar.scss";
const Topnavbar = () => {
  return (
    <div>
      <div class="navbar-2">
        <div class="navbar-item">
          <span class="bi">Home</span>
          <span class="bi">About</span>
          <span class="bi">Info</span>
          <span class="bi">Contact</span>
        </div>
        <div class="navbar-item">
          <i class="bi bi-facebook"></i>
          <i class="bi bi-instagram"></i>
          <i class="bi bi-youtube"></i>
          <i class="bi bi-telegram"></i>
          <i class="bi bi-twitter"></i>
        </div>
      </div>
    </div>
  );
};

export default Topnavbar;
