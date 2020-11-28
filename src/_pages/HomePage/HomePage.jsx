import React, { Component } from "react";
import { connect } from "react-redux";
import { selectPage } from "../../actions/NavActions";

import Footer from "../../_components/Footer/Footer";
import NavBar from "../../_components/NavBar/NavBar";
import TitleBar from "../../_components/TitleBar/TitleBar";

import "./HomePage.scss";

function mapDispatchToProps(dispatch) {
  return {
    selectPage: page => dispatch(selectPage(page))
  };
}

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPageSelected = (page) => {
    this.props.selectPage(page);
  };

  render() {
    let navs = ["Home", "Men", "Women", "Kids", "Accessories"];

    return (
      <div className="home-screen">
        <TitleBar />
        <div className="fill-space">
          <div className="content">
            <NavBar menuItems={navs} onPageSelected={this.onPageSelected} />
            {this.state.selectedPage}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(HomePage);
