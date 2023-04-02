import React from "react";
import "./impacts.scss";
import members from "../../assets/images/members.png";
import Founder from "./component/FounderSlider";
import Header from "../../components/Header";
import Company from "./component/FounderSlider/Company";

const Impacts: React.FC = () => {
  return (
    <>
      <Header />
      <div className="impacts-home">
        <div className="mx">
          <div className="impact_hero">
            <div className="hero_wrapper">
              <img src={members} alt="members" />
              <div className="explain">
                <h4>
                  Transformation we cause in the industry, aren’t via big moves,
                  but significantly smaller actions, which we believe, is
                  heading us into what it is to become the great, and be called
                  the novel and disruptive.
                </h4>
              </div>
            </div>

            <Founder />
          </div>
          <div className="border_bottom"></div>
          <Company />
        </div>
      </div>
    </>
  );
};

export default Impacts;
