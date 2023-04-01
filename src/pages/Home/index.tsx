import React from "react";
import RollArrow from "../../assets/images/roll-arrow.png";
import ExternalLink from "../../assets/images/external-link.png";
import HexagonImgOne from "../../assets/images/hexagon-img-1.png";
import HexagonImgTwo from "../../assets/images/hexagon-img-2.png";
import ServiceImg from "../../assets/images/serive_img.png";
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
                  <div className="background-img" key={index}>
                    <img src={HexagonImgOne} alt="" />
                    <div className="hexagon firstHexagon">
                      <h3>{f}</h3>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className="hexagonArea second"
              style={{ transform: "translateY(-26px)" }}
            >
              {IHexagon.slice(8, 14).map((f, index) => {
                return (
                  <div key={index} className="background-img">
                    <img src={HexagonImgOne} alt="" />

                    <div className="hexagon firstHexagon">
                      <h3>{f}</h3>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className="hexagonArea third"
              style={{ transform: "translateY(-51px)" }}
            >
              {IHexagon.slice(15, 20).map((f, index) => {
                return (
                  <div key={index} className="background-img">
                    <img src={HexagonImgOne} alt="" />

                    <div className="hexagon firstHexagon">
                      <h3>{f}</h3>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className="hexagonArea four"
              style={{ transform: "translateY(-75px)" }}
            >
              {IHexagon.slice(20, 22).map((f, index) => {
                return (
                  <div key={index} className="background-img">
                    <img src={HexagonImgOne} alt="" />

                    <div className="hexagon firstHexagon">
                      <h3>{f}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className="hexagonArea five"
              style={{ transform: "translateY(-100px)" }}
            >
              {IHexagon.slice(22).map((f, index) => {
                return (
                  <div key={index} className="background-img">
                    <img src={HexagonImgOne} alt="" />
                    <div className="hexagon firstHexagon">
                      <h3>{f}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="hexagon-service">
              <div className="background-img">
                <img src={ServiceImg} alt="" />
                <div className="hexagon-add">
                  <h3>48+</h3>
                  <p>value added</p>
                  <p>services</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hexagon-service-media">
            <div className="background-img">
              <img src={HexagonImgTwo} alt="" />
              <div className="hexagon-add">
                <h3>48+</h3>
                <p>value added</p>
                <p>services</p>
              </div>
            </div>
          </div>
          <div className="second-content"></div>
        </div>
      </div>

      <div className="second-hexagon-area">
        <div className="hexagonArea first">
          {IHexagon.slice(0, 2).map((f, index) => {
            return (
              <div className="background-img" key={index}>
                <img src={HexagonImgOne} alt="" />
                <div className="hexagon firstHexagon">
                  <h3>{f}</h3>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="hexagonArea second"
          style={{ transform: "translateY(-26px)" }}
        >
          {IHexagon.slice(2, 3).map((f, index) => {
            return (
              <div key={index} className="background-img">
                <img src={HexagonImgOne} alt="" />

                <div className="hexagon firstHexagon">
                  <h3>{f}</h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid-content-one">
          <div>
            <div
              className="hexagonArea third"
              style={{ transform: "translateY(-51px)" }}
            >
              {IHexagon.slice(3, 5).map((f, index) => {
                return (
                  <div key={index} className="background-img">
                    <img src={HexagonImgOne} alt="" />

                    <div className="hexagon firstHexagon">
                      <h3>{f}</h3>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className="hexagonArea four"
              style={{ transform: "translateY(-75px)" }}
            >
              {IHexagon.slice(5, 6).map((f, index) => {
                return (
                  <div key={index} className="background-img">
                    <img src={HexagonImgOne} alt="" />

                    <div className="hexagon firstHexagon">
                      <h3>{f}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div
              className="hexagonArea four"
              style={{ transform: "translateY(-55px)" }}
            >
              {IHexagon.slice(6, 8).map((f, index) => {
                return (
                  <div key={index} className="background-img">
                    <img src={HexagonImgOne} alt="" />

                    <div className="hexagon firstHexagon">
                      <h3>{f}</h3>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className="hexagonArea four"
              style={{ transform: "translateY(-80px)" }}
            >
              {IHexagon.slice(9, 10).map((f, index) => {
                return (
                  <div key={index} className="background-img">
                    <img src={HexagonImgOne} alt="" />

                    <div className="hexagon firstHexagon">
                      <h3>{f}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div
          className="hexagonArea media-five"
          style={{ transform: "translateY(-100px)" }}
        >
          {IHexagon.slice(10, 12).map((f, index) => {
            return (
              <div key={index} className="background-img">
                <img src={HexagonImgOne} alt="" />
                <div className="hexagon firstHexagon">
                  <h3>{f}</h3>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="hexagonArea five"
          style={{ transform: "translateY(-125px)" }}
        >
          {IHexagon.slice(12, 13).map((f, index) => {
            return (
              <div key={index} className="background-img">
                <img src={HexagonImgOne} alt="" />
                <div className="hexagon firstHexagon">
                  <h3>{f}</h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid-content-one">
          <div>
            <div
              className="hexagonArea five"
              style={{ transform: "translateY(-125px)" }}
            >
              {IHexagon.slice(13, 15).map((f, index) => {
                return (
                  <div key={index} className="background-img">
                    <img src={HexagonImgOne} alt="" />
                    <div className="hexagon firstHexagon">
                      <h3>{f}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className="hexagonArea five"
              style={{ transform: "translateY(-150px)" }}
            >
              {IHexagon.slice(16, 17).map((f, index) => {
                return (
                  <div key={index} className="background-img">
                    <img src={HexagonImgOne} alt="" />
                    <div className="hexagon firstHexagon">
                      <h3>{f}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div
              className="hexagonArea five"
              style={{ transform: "translateY(-125px)" }}
            >
              {IHexagon.slice(17, 19).map((f, index) => {
                return (
                  <div key={index} className="background-img">
                    <img src={HexagonImgOne} alt="" />
                    <div className="hexagon firstHexagon">
                      <h3>{f}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className="hexagonArea five"
              style={{ transform: "translateY(-150px)" }}
            >
              {IHexagon.slice(19, 20).map((f, index) => {
                return (
                  <div key={index} className="background-img">
                    <img src={HexagonImgOne} alt="" />
                    <div className="hexagon firstHexagon">
                      <h3>{f}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div
          className="hexagonArea five"
          style={{ transform: "translateY(-125px)" }}
        >
          {IHexagon.slice(20, 22).map((f, index) => {
            return (
              <div key={index} className="background-img">
                <img src={HexagonImgOne} alt="" />
                <div className="hexagon firstHexagon">
                  <h3>{f}</h3>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="hexagonArea five"
          style={{ transform: "translateY(-150px)" }}
        >
          {IHexagon.slice(22, 23).map((f, index) => {
            return (
              <div key={index} className="background-img">
                <img src={HexagonImgOne} alt="" />
                <div className="hexagon firstHexagon">
                  <h3>{f}</h3>
                </div>
              </div>
            );
          })}
        </div>
        <div className="visit-btn-media">
          <button>
            Visit parent company website <img src={ExternalLink} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
