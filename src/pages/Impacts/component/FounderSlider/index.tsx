import React from "react";
import Slider from "react-slick";
import Button from "../../../../components/Button/Button";
import { Data } from "../FounderSlider/impact";
import "./founder.scss";

const Founder: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplayspeed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      {Data.map((f, index) => {
        return (
          <div className="slider" key={index}>
            <h5>{f.heading}</h5>
            <div className="founder">
              <img src={f.image} alt="" />
              <div>
                <h4>{f.name}</h4>
                <h3>{f.position}</h3>
              </div>
            </div>
            <p>{f.discription}</p>
            <Button varient="primary">Read casestudy</Button>
          </div>
        );
      })}
    </Slider>
  );
};

export default Founder;
