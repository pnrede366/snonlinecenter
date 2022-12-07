import React from "react";
import "./home.scss";
const Home = () => {
  return (
    <div>
      <div class="main-card">
        <div class="card">
          <div class="imgbox">
            <img class="img" src="assets/Passport-Seva.jpg" />
            <h2 class="h2">Passport-Seva</h2>
          </div>

          <div class="content">
            <h5>Documents Required</h5>
            <p>
              Address Proof Electricity Bill Proof Of Gas Connection
              <h6>Coming Soon...</h6>
            </p>
          </div>
        </div>
        <div class="card">
          <div class="imgbox">
            <img class="img" src="assets/download (2).png" />
            <h2 class="h2">GST-Registration</h2>
          </div>

          <div class="content">
            <h5> Documents Required </h5>
            <p>
              Electricity Bill Telephone Bill PropertyTax Receipt
              <h6>Coming Soon...</h6>
            </p>
          </div>
        </div>
        <div class="card">
          <div class="imgbox">
            <img class="img" src="assets/download (3).jpeg" />
            <h2 class="h2">company-registration</h2>
          </div>

          <div class="content">
            <h5>Documents Required</h5>
            <p>
              PAN Card Passport (Foreign Nationals Only) Aadhaar Card
              <h6>Coming Soon...</h6>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
