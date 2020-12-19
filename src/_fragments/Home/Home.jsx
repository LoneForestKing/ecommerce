import React from "react";

import Carousel from "react-bootstrap/Carousel";

import "./Home.scss";

const welcomeMsg = `if you can't stop thinking about it... buy it.`;

const HomeFragment = () => {
  let carousalItems = [
    { src: "/images/home_06.jpg" },
    { src: "/images/home_05.jpg" },
    { src: "/images/home_04.jpg" },
    { src: "/images/home_03.jpg" },
    { src: "/images/home_02.jpg" },
    { src: "/images/home_01.jpg" },
  ];

  const carouselOptions = {
    indicators: false,
    controls: false,
    pause: false,
  };

  return (
    <div className="container-x">
      <div className="bill-board">
        <Carousel {...carouselOptions}>
          {carousalItems.map(({ src }, i) => (
            <Carousel.Item key={i}>
              <div
                className="bill-board-img"
                style={{ backgroundImage: `url(${src})` }}
              ></div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="bill-board-caption">
          <div>{welcomeMsg}</div>
        </div>
      </div>
    </div>
  );
};

export default HomeFragment;
