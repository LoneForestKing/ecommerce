import React, { useEffect, useState } from "react";
import { Collapse } from "react-bootstrap";

import "./TitleBar.scss";

const TitleBar = (props) => {
  // const notifications = 1; // Needs to be global
  // const itemsInCart = 2; // Needs to be global

  const searchRef = React.createRef();
  const [state, setState] = useState({
    showSearch: false,
    showCart: false,
    showProfile: false,
  });

  useEffect(() => {
    if (state.showSearch) {
      searchRef.current.focus();
    }
  });

  const handleInputChange = (e) => {
    console.log(e.target.value);
  };

  const showSearch = () => {
    setState((prevState) => ({ ...prevState, showSearch: !state.showSearch }));
  };

  const showProfile = (e) => {
    setState((prevState) => ({ ...prevState, showProfile: !e }));
  };

  const showCart = () => {
    setState((prevState) => ({ ...prevState, showCart: !state.showCart }));
  };

  return (
    <div className="title-bar no-s">
      <span className="title-empty-space"></span>
      <span className="title-text-main">Axii</span>
      <span className="title-options-holder">
        {state.showSearch ? (
          <input
            type="text"
            className="search-text"
            placeholder="Search"
            onChange={handleInputChange}
            tabIndex="2"
            ref={searchRef}
          />
        ) : (
          ""
        )}
        <i className="material-icons" onClick={showSearch}>
          search
        </i>
        <i className="material-icons" onClick={showCart}>
          shopping_cart
        </i>
        <i
          className="material-icons"
          onClick={() => showProfile(state.showProfile)}
          onMouseEnter={() => showProfile(false)}
          onMouseLeave={() => showProfile(true)}
        >
          perm_identity
        </i>
        <Collapse in={state.showProfile}>
          <div className="profile-menu" onMouseEnter={() => showProfile(false)} onMouseLeave={() => showProfile(true)}>
            <ul>
              <li>
                <i className="material-icons">account_circle</i>
                My Profile
              </li>
              <li>
                <i className="material-icons">shopping_bag</i>
                My Orders
              </li>
              <li>
                <i className="material-icons">settings</i>
                Settings
              </li>
              <li>
                <i className="material-icons">exit_to_app</i>
                Log out
              </li>
            </ul>
          </div>
        </Collapse>
      </span>
    </div>
  );
};

export default TitleBar;
