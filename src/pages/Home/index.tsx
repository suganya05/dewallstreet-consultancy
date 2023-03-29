import React from "react";
import RollArrow from "../../assets/images/roll-arrow.png";
import "./Home.scss";

const Home: React.FC = () => {
  return (
    <div className="mx">
      <div className="home-wrapper">
        <div className="first-content">
          <h3>We are the best professional service network for all your</h3>
          <div>
            <h1>A</h1>
            <img src={RollArrow} alt="" />
            <h1>Z</h1>
          </div>
        </div>
        <div className="second-content"></div>
      </div>
    </div>
  );
};

export default Home;
