import React from "react";

import Footer from "../../_components/Footer/Footer";
import NavBar from "../../_components/NavBar/NavBar";
import TitleBar from "../../_components/TitleBar/TitleBar";

import "./HomePage.scss";

export default function HomePage(props) {
  let navs = ["Home", "Men", "Women", "Kids", "Accessories"];

  return (
    <div className="home-screen">
      <TitleBar />
      <div className="fill-space">
        <div className="content">
          <NavBar menuItems={navs} />
        </div>
        <Footer />
      </div>
    </div>
  );
}
