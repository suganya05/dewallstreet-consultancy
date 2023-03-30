import React from "react";
import Button from "../Button/Button";
import business from "../../assets/images/businesses.png";
import Conseltancy from "../../assets/images/conseltancy-logo.svg";
import advisory from "../../assets/images/advisory.png";
import advisorylogo from "../../assets/images/advisory-logo.svg";
import "./LineOfBusinesses.scss";

interface IBusiness {
  logo: string;
  title: string;
  discription: string;
  button: string;
  image: string;
  position: string;
}
const DemoBusinesses: React.FC<IBusiness> = ({
  logo,
  title,
  discription,
  button,
  image,
  position,
}) => {
  return (
    <div
      className={
        position === "right"
          ? "business-content-right"
          : "business-content-left"
      }
    >
      <div className="advisory">
        <img src={image} alt="" />
      </div>
      <div className="advisory-logo">
        <img src={logo} alt="" />
        <h2>{title}</h2>
        <p>{discription}</p>
        <Button varient="primary">{button}</Button>
      </div>
    </div>
  );
};
const LineOfBusinesses: React.FC = () => {
  return (
    <div className="business-wrapper">
      <div className="mx">
        <div className="business">
          <h1>LINE OF BUSINESSES</h1>

          <div className="education-content">
            <div className="business-content-left">
              <DemoBusinesses
                position="left"
                image={business}
                logo={Conseltancy}
                title="On demand client services"
                discription="We are the most reputed consultancy amongst new age market demands and we word for individuals and business on various fixed and hourly fee models."
                button="Visit Consultancy website"
              />
            </div>
            <div className="business-content-right">
              <DemoBusinesses
                position="right"
                image={advisory}
                logo={advisorylogo}
                title="Private equity partnership"
                discription="We established advisory unit for enterprises and startups with potential ideas to scale fast on private equity partnership basis."
                button="Visit Advisory website"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineOfBusinesses;
