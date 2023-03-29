import React from "react";
import RollArrow from "../../assets/images/roll-arrow.png";
import ExternalLink from "../../assets/images/external-link.png";
import "./Home.scss";

const Home: React.FC = () => {
  return (
    <div className="mx">
      <div className="home-container">
        <video autoPlay loop muted className="background-clip">
          <source
            src="https://ik.imagekit.io/d4cf2o3ja/video.mp4?updatedAt=1680083404680"
            type="video"
          />
        </video>
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
              <div className="hexagon">
                <h3>Product Design</h3>
              </div>
              <div className="hexagon">
                <h3>Digital Transformation</h3>
              </div>
              <div className="hexagon">
                <h3>Community Building</h3>
              </div>
              <div className="hexagon">
                <h3>Management Consultations</h3>
              </div>
              <div className="hexagon">
                <h3>Product Development</h3>
              </div>
              <div className="hexagon">
                <h3>Regulatory Compliancess</h3>
              </div>
              <div className="hexagon">
                <h3>Strategic Deal Transactions</h3>
              </div>
            </div>

            <div
              className="hexagonArea second"
              style={{ transform: "translateY(-26px)" }}
            >
              <div className="hexagon">
                <h3>Private Equity Acquisitions</h3>
              </div>
              <div className="hexagon">
                <h3>Mergers, Acquisitions & Divestitutres</h3>
              </div>
              <div className="hexagon">
                <h3>Business Development</h3>
              </div>
              <div className="hexagon">
                <h3>Investment Portfolios</h3>
              </div>
              <div className="hexagon">
                <h3>Experience Designs</h3>
              </div>
              <div className="hexagon">
                <h3>Culture, Diversity & Inclusion</h3>
              </div>
            </div>
            <div
              className="hexagonArea third"
              style={{ transform: "translateY(-50px)" }}
            >
              <div className="hexagon">
                <h3>Customer Success</h3>
              </div>
              <div className="hexagon">
                <h3>Public Relations</h3>
              </div>
              <div className="hexagon">
                <h3>Human Capital</h3>
              </div>
              <div className="hexagon">
                <h3>Business Licensing</h3>
              </div>
              <div className="hexagon">
                <h3>Digital Marketing</h3>
              </div>
            </div>
            <div
              className="hexagonArea four"
              style={{ transform: "translateY(-72px)" }}
            >
              <div className="hexagon">
                <h3>Networking & Events</h3>
              </div>
              <div className="hexagon">
                <h3>Market Research</h3>
              </div>
            </div>
            <div
              className="hexagonArea five"
              style={{ transform: "translateY(-95px)" }}
            >
              <div className="hexagon">
                <h3>Tax advisories</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
