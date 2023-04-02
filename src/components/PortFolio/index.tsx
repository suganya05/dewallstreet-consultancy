import React from "react";
import WebDevelopmentOne from "../../assets/images/web-development-1.png";
import WebDevelopmentTwo from "../../assets/images/web-development-2.png";
import WebDevelopmentThree from "../../assets/images/web-development-3.png";
import Button from "../Button/Button";
import "./PortFolio.scss";

const PortFolio: React.FC = () => {
  return (
    <div className="portFolio-wrapper">
      <div className="mx">
        <div className="portFolio-head">
          <p>PORTFOLIO</p>
        </div>
        <div className="portFolio-flexContent">
          <div>
            <h1>We innovatively resolved project</h1>
            <h1>challenges pre-delivery.</h1>
          </div>
          <div className="read-casestudy-btn">
            <Button varient="secondary">Read casestudy</Button>
          </div>
        </div>

        <div className="web-development-container">
          <div className="web-development-video">
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            >
              <source
                src="https://ik.imagekit.io/d4cf2o3ja/web-development.mp4?updatedAt=1680263299603"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="overflow">
            <div className="web-development-images">
              <div className="web-development-img-flex">
                <div>
                  <img src={WebDevelopmentOne} alt="" />
                </div>
                <div>
                  <img src={WebDevelopmentTwo} alt="" />
                </div>
              </div>
              <div className="web-develop">
                <img src={WebDevelopmentThree} alt="" />
              </div>
            </div>

            <div className="web-development-images">
              <div className="web-development-img-flex">
                <div>
                  <img src={WebDevelopmentOne} alt="" />
                </div>
                <div>
                  <img src={WebDevelopmentTwo} alt="" />
                </div>
              </div>
              <div className="web-develop">
                <img src={WebDevelopmentThree} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortFolio;
