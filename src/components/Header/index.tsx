import React, { useState } from "react";
import "./header.scss";
import { ReactComponent as Logo } from "../../assets/images/conseltancy-logo.svg";
import { ReactComponent as Finger } from "../../assets/icons/fingerprint.svg";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import { ReactComponent as Dewall } from "../../assets/icons/dewall-logo.svg";

const Header: React.FC = () => {
  const [active, setActive] = useState("menu");

  const navToggle = () => {
    active === "menu" ? setActive("menu nav_active") : setActive("menu");
  };
  return (
    <>
      <div className="mx">
        <div className="header">
          <div className="logo">
            <Logo />
          </div>
          <div onClick={navToggle} className="menu_bar">
            <Menu />
          </div>
          <div className={active}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Divisions</a>
            </li>
            <li>
              <a href="#">Impacts</a>
            </li>
          </div>
          <div className="dewall_logo">
            <Dewall />
          </div>
          <div className="finger">
            <div className="border">
              <Finger />
            </div>

            <div>
              <a href="#">Access</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
