import React from "react";
import Slider from "react-slick";

import { DivisionsData } from "./data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./DivisionsCard.scss";

import DewallLogo from "../../../../assets/icons/dewall-logo.svg";
import { ReactComponent as Arrow } from "../../../../assets/icons/arrow-right.svg";

const DivisionsCard = () => {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="division-card">
        <Slider {...settings}>
          {DivisionsData.map((f, i) => (
            <div key={i}>
              <div className="first-layer">
                <img src={f.icons} alt="" />
                <img src={DewallLogo} alt="" />
                <p>{f.title}</p>
              </div>
              <div className="second-layer-parent">
                {f.content.map((f, i) => (
                  <div key={i} className="second-layer">
                    <Arrow />
                    <p>{f}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default DivisionsCard;
