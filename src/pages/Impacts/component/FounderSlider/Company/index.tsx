import React from "react";
import Slider from "react-slick";
import "./company.scss";
import { ReactComponent as Crypto } from "../../../../../assets/icons/crypto.svg";
import { ReactComponent as Dify } from "../../../../../assets/icons/dify.svg";
import { ReactComponent as Hod } from "../../../../../assets/icons/hodl4gold.svg";
import { ReactComponent as Rtra } from "../../../../../assets/icons/rtra.svg";
import { ReactComponent as Valifi } from "../../../../../assets/icons/valifi.svg";

const Company: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplayspeed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <div className="company-logos">
        <h4>NOTABLE PLAYERS IN THE MARKET WE WORKED FOR</h4>
        <Slider {...settings}>
          <div>
            <Dify />
          </div>
          <div>
            <Crypto />
          </div>
          <div>
            <Hod />
          </div>
          <div>
            <Rtra />
          </div>
          <div>
            <Valifi />
          </div>
          <div>
            <Hod />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Company;
