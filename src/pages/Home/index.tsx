import React from "react";
import RollArrow from "../../assets/images/roll-arrow.png";
import ExternalLink from "../../assets/images/external-link.png";
import { IHexagon } from "./Home";
import "./Home.scss";

const Home: React.FC = () => {
  return (
    <div className="mx">
      <div className="home-container">
        <div className="background-clip">
          <video
            src="https://ik.imagekit.io/d4cf2o3ja/video.mp4?updatedAt=1680083404680"
            autoPlay
            loop
            muted
            width="100%"
            height="100%"
          ></video>
          <div className="overlay"></div>
        </div>

        <div className="home-wrapper">
          <div className="first-content">
            <h3>We are the best professional service network for all your</h3>
            <div className="a-to-z-content">
              <h1>A</h1>
              <img src={RollArrow} alt="roll-arrow" />
              <h1>Z</h1>
            </div>
            <h2>business needs.</h2>
            <p>
              Dewallstreet Consultancy is a legally structured unit of
              Dewallstreet Private Limited, an India based multiple interest
              conglomeration foundation in its early seed stage, which is
              ethically incorporated and regulated under the norms of Ministry
              of Corporate Affairs (MCA) & Registrar of Companies (RoC) and
              follows industrial reputation trust marks, quality delivery
              standards, ethical business & market practices with Go-Global
              bootstrapped principle.
            </p>
            <div className="visit-btn">
              <button>
                Visit parent company website <img src={ExternalLink} alt="" />
              </button>
            </div>
          </div>

          <div className="second-content">
            <div className="hexagonArea first">
              {IHexagon.slice(0, 7).map((f, index) => {
                return (
                  <div className="hexagon" key={index}>
                    <h3>{f}</h3>
                  </div>
                );
              })}
            </div>

            <div
              className="hexagonArea second"
              style={{ transform: "translateY(-19px)" }}
            >
              {IHexagon.slice(8, 14).map((f, index) => {
                return (
                  <div className="hexagon" key={index}>
                    <h3>{f}</h3>
                  </div>
                );
              })}
            </div>

            <div
              className="hexagonArea third"
              style={{ transform: "translateY(-37px)" }}
            >
              {IHexagon.slice(15, 20).map((f, index) => {
                return (
                  <div className="hexagon" key={index}>
                    <h3>{f}</h3>
                  </div>
                );
              })}
            </div>

            <div
              className="hexagonArea four"
              style={{ transform: "translateY(-55px)" }}
            >
              {IHexagon.slice(20, 22).map((f, index) => {
                return (
                  <div className="hexagon" key={index}>
                    <h3>{f}</h3>
                  </div>
                );
              })}
            </div>
            <div
              className="hexagonArea five"
              style={{ transform: "translateY(-73px)" }}
            >
              {IHexagon.slice(22).map((f, index) => {
                return (
                  <div className="hexagon" key={index}>
                    <h3>{f}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
