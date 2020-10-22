import React, { useState } from "react";
import "./Header.style.scss";

const Header = () => {
  const [hidden, setHidden] = useState(true);
  const handleHidden = () => {
    setHidden(!hidden);
  };
  return (
    <div className="header">
      <div className="header_left">
        <img src="/images/logo.svg" alt="logo" />
        <div className="nav_desk">
          <ul>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Resources</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="header_right">
        <ul>
          <li>
            <a>Login</a>
          </li>
          <li>
            <a className="sign_up">Sign Up</a>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleHidden}>
          <img
            src={
              hidden ? "/images/icon-hamburger.svg" : "/images/icon-close.svg"
            }
            alt=""
          />
        </div>
      </div>

      <div className={!hidden ? "nav_mobile" : "nav_mobile nav_close"}>
        <a>Features</a>
        <a>Pricing</a>
        <a>Resources</a>
        <div className="nav-end">
          <a>Login</a>
          <a className="sign_up">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
