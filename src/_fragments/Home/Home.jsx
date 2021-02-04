import React from "react";

import Carousel from "react-bootstrap/Carousel";

import "./Home.scss";

const welcomeMsg = `if you can't stop thinking about it... buy it.`;

const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea commodo consequat.`;

const HomeFragment = () => {
  let carousalItems = [
    { src: "/images/home_06.jpg" },
    { src: "/images/home_05.jpg" },
    { src: "/images/home_04.jpg" },
    { src: "/images/home_03.jpg" },
    { src: "/images/home_02.jpg" },
    { src: "/images/home_01.jpg" },
  ];

  const products = Array(5).fill("");

  let categories = [
    { title: "home", description: description, featuredProducts: products },
    { title: "men", description: description, featuredProducts: products },
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

      <div className="categories-sec">
        {categories.map(({ title, description, featuredProducts }, i) => (
          <div className="category">
            <div
              className={
                "category-description" + ((i % 2 !== 0)
                  ? " category-description-reverse"
                  : "")
              }
            >
              <div className="shop-btn no-s">Shop all</div>
              <div className="header">
                <div className="title">{title}</div>
                <div className="description">{description}</div>
              </div>
            </div>

            <div className="category-products">
              <div className="category-image"></div>
              <div className="products-list">
                {featuredProducts.map(() => (
                  <div className="product-item">
                    <div className="name">Product Name</div>
                    <div className="price">View Details - ₹999.99</div>
                  </div>
                ))}
              </div>
              <div className="shop-btn no-s">Shop all</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeFragment;
