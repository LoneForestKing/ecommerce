import React from "react";
import PropTypes from "prop-types";

import "./NavBar.scss";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { selectedPage: state.selectedPage };
};

const NavBar = (props) => {
  const { menuItems, onPageSelected, selectedPage } = props;

  const NavItems = () => {
    return menuItems.map((item) => (
      <div
        key={item}
        className={
          "menu-item" + (selectedPage === item ? " menu-item-hover" : "")
        }
        onMouseEnter={() => onPageSelected(item)}
        onMouseLeave={() => onPageSelected("")}
      >
        {item}
      </div>
    ));
  };

  return (
    <div className="nav-bar no-s">
      <NavItems />
      {selectedPage !== "" ? (
        <div
          className={"menu-item-content" + (selectedPage === "" ? "hide" : "")}
          onMouseEnter={() => onPageSelected(selectedPage)}
          onMouseLeave={() => onPageSelected("")}
        >
          {selectedPage} is selected
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

export default connect(mapStateToProps)(NavBar);
