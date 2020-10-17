import React from "react";
import "./Footer.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = (props) => {
  return (
    <div className="footer-bar">
      
      <div className="footer-content">
      
        <div className="content address">
          <div className="content-title no-s">AVAILABLE AT</div>
          <div className="content-body">
            <div>Level 1, 69-1</div>
            <div>No Man's Street, Great Sink</div>
            <div>Antartica, 069-420</div>
          </div>
        </div>

        <div className="content no-s">
          <div className="content-title">LIKE US, PLEASE LET US KNOW</div>
          <div className="feedback-div">
            <input
              className="feedback-email"
              type="email"
              placeholder="Enter your Email Id"
            />
            <i className="material-icons">arrow_forward</i>
            <button className="send-button">SEND</button>
          </div>
        </div>
      </div>

      <div className="social-bs no-s">
        <FontAwesomeIcon className="social-icons" icon={["fab", "instagram"]} />
        <FontAwesomeIcon
          className="social-icons"
          icon={["fab", "facebook-f"]}
        />
        <FontAwesomeIcon className="social-icons" icon={["fab", "linkedin"]} />
        <FontAwesomeIcon
          className="social-icons"
          icon={["fab", "pinterest-p"]}
        />
        <FontAwesomeIcon className="social-icons" icon={["fab", "twitter"]} />
        <FontAwesomeIcon className="social-icons" icon={["fab", "whatsapp"]} />
        <FontAwesomeIcon className="social-icons" icon={["fab", "youtube"]} />
      </div>

      <div className="bottom-nav no-s">
        <div className="bot-nav-item">ABOUT US</div>
        <div className="bot-nav-item">CAREERS</div>
        <div className="bot-nav-item">HELP</div>
        <div className="bot-nav-item">FAQs</div>
        <div className="bot-nav-item">TERMS</div>
      </div>
    </div>
  );
};

export default Footer;
