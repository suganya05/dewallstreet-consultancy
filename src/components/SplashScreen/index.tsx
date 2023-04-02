import React, { useEffect, useState } from "react";
import logo from "../../assets/images/dewallstreet.svg";
import "./SplashScreen.scss";

const SplashScreen: React.FC = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(false), 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <div className="mx">
      {show && (
        <div className="splashscreen">
          <div className="splashscreenLogo">
            <img src={logo} alt="" />
          </div>
          <div className="acessingPort">
            <p>acessing port.</p>
            <div className="splashContainer">
              <div className="dot-1"></div>
              <div className="dot-2"></div>
              <div className="dot-3"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SplashScreen;
