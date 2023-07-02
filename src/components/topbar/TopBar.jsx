import { useState } from "react";
import { Link } from "react-router-dom";
import "./topbar.css";
import logo from "../../components/img/logo.png";

export default function TopBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="top">
      <div className="topleft">
        <Link to="/Home">
          <img className="logo" src={logo} alt="react logo" />
        </Link>
      </div>
      <div className="topcenter">
        <ul className="toplist">
          <li className="toplistitem">
            <Link className="link" to="/">
            </Link>
          </li>
          <li
            className={`toplistitem dropdown-item ${
              isDropdownOpen ? "active" : ""
            }`}
            onClick={handleDropdownToggle}
          >
            Where do we operate
            <i
              className={`dropdown-icon fas ${
                isDropdownOpen ? "fa-caret-up" : "fa-caret-down"
              }`}
            ></i>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-link" to="/">
                    Africa
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-link" to="/">
                    Europe
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-link" to="/">
                    Americas
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      <div className="topright">
        <ul className="toplist">
        </ul>
        <div className="button-wrapper">
          <Link to="/Login">
            <button className="login-button">Log In</button>
          </Link>
          <Link to="/Register">
          <button className="signup-button">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
