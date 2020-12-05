import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./NavBar.scss";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { selectedPage: state.selectedPage };
};

const NavBar = (props) => {
  const { menuItems, onPageSelected } = props;

  const [actions, setAction] = useState({
    click: false,
    hover: "",
    fade: false,
    in: false,
  });

  useEffect(() => {
    // Unmount when Fade out comeplete
    if (!actions.in && actions.hover !== "") {
      setTimeout(() => {
        setAction({
          ...actions,
          hover: "",
          fade: false,
          in: false,
        });
      }, 350);
    }
  });

  const onMenuClick = (item, e) => {
    e.preventDefault();
    onPageSelected(item);
  };

  const onHoverIn = (item, e) => {
    e.preventDefault();
    setAction({
      ...actions,
      hover: item,
      in: true,
    });
  };

  const onHoverOut = (item, e) => {
    // Initiate fade out
    setAction({
      ...actions,
      fade: true,
      in: false,
    });
  };

  const NavItems = () => {
    return menuItems.map((item) => (
      <div
        key={item}
        className={
          "menu-item" + (actions.hover === item ? " menu-item-hover" : "")
        }
        onMouseEnter={(e) => onHoverIn(item, e)}
        onMouseLeave={(e) => onHoverOut("", e)}
        onClick={(e) => onMenuClick(item, e)}
      >
        {item}
      </div>
    ));
  };

  return (
    <div className="nav-bar no-s">
      <NavItems />
      {actions.hover !== "" ? (
        <div
          className={"menu-item-content " + (actions.fade ? "hide" : "")}
          onMouseEnter={(e) => onHoverIn(actions.hover, e)}
          onMouseLeave={(e) => onHoverOut("", e)}
        >
          {actions.hover} is hovered
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
