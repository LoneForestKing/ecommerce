import React, { Component } from "react";
import { connect } from "react-redux";
import { selectPage } from "../../actions/NavActions";

import Footer from "../../_components/Footer/Footer";
import NavBar from "../../_components/NavBar/NavBar";
import TitleBar from "../../_components/TitleBar/TitleBar";
import HomeFragment from "../../_fragments/Home/Home";

import "./HomePage.scss";

const navs = ["Home", "Men", "Women", "Kids", "Accessories"];

function mapDispatchToProps(dispatch) {
  return {
    selectPage: (page) => dispatch(selectPage(page)),
  };
}

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPage: navs[0],
    };
  }

  onPageSelected = (page) => {
    this.setState({
      selectedPage: page,
    });
    this.props.selectPage(page);
  };

  render() {
    return (
      <div className="home-screen">
        <TitleBar />
        <NavBar menuItems={navs} onPageSelected={this.onPageSelected} />
        <div className="fill-space">
          <div className="content">
            <HomeFragment />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(HomePage);
