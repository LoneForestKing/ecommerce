import React, { useState } from "react";

import PropTypes from "prop-types";

import "./NavBar.scss";

const NavBar = (props) => {
  const [hoverItem, setHoverItem] = useState("");

  const { menuItems } = props;

  const NavItems = () => {
    return menuItems.map((item) => (
      <div
        key={item}
        className={"menu-item" + (hoverItem === item ? " menu-item-hover" : "")}
        onMouseEnter={() => setHoverItem(item)}
        onMouseLeave={() => setHoverItem("")}
      >
        {item}
      </div>
    ));
  };

  return (
    <div className="nav-bar no-s">
      <NavItems />
      {hoverItem !== "" ? (
        <div
          className="menu-item-content"
          onMouseEnter={() => setHoverItem(hoverItem)}
          onMouseLeave={() => setHoverItem("")}
        >
          {hoverItem} is selected
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

NavBar.propTypes = {
  menuItems: PropTypes.array.isRequired,
};

export default NavBar;
