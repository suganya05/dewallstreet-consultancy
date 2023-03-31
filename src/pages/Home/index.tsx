import React from "react";
import RollArrow from "../../assets/images/roll-arrow.png";
import ExternalLink from "../../assets/images/external-link.png";
import "./Home.scss";
import Header from "../../components/Header";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className="mx">
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
          <div className="second-content"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
