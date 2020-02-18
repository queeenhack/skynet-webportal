import React from "react";
import topSwoosh from "../../images/top-swoosh.svg";
import "./App.scss";
import { HomeTop, HomeUpload, HomeBuilt, HomeSamples, HomeStay, HomeNetwork, Footer } from "../";

function App() {
  return (
    <div className="app">
      <img className="top-swoosh" src={topSwoosh} alt="top swoosh" />

      <div className="width">
        <HomeTop />
        <HomeUpload />
        <HomeBuilt />
        <HomeSamples />
      </div>

      <div className="home-white">
        <div className="width">
          <HomeStay />
          <HomeNetwork />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
