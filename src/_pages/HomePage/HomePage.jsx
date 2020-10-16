import React from "react";

import Footer from "../../_components/Footer/Footer";
import TitleBar from "../../_components/TitleBar/TitleBar";

import "./HomePage.scss";

export default function HomePage(props) {
  return (
    <div className="home-screen">
      <TitleBar />
      <div className="fill-space">
      <div className="content"></div>
        <Footer />
      </div>
    </div>
  );
}
