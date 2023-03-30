import React from "react";
import GirlImg from "../../assets/images/girl-img.png";
import LineCode from "../../assets/images/ux-services-line-code.png";
import Button from "../../components/Button/Button";
import { IStartUpUxServices } from "./StartUpUxServices";
import "./StartUpUxServices.scss";

const StartUpUxServices: React.FC = () => {
  return (
    <div className="mx">
      <div className="startUp-ux-wrapper">
        <div className="startUp-ux-container">
          <div className="first-content">
            <div className="ux-box">
              <h1>UX</h1>
            </div>
            <div>
              <h3>User Experience Studio </h3>
            </div>
          </div>

          <div className="startup-content">
            <h2>STARTUP</h2>
            <h2>UX SERVICES</h2>
          </div>
        </div>

        <div className="second-content">
          <div className="girl-img">
            <img src={GirlImg} alt="" />
          </div>
          <div className="startup-services-content">
            <div className="line-code">
              <img src={LineCode} alt="" />
            </div>
            <div className="IStartUpUxServices">
              {IStartUpUxServices.map((f, index) => {
                return (
                  <div key={index} className="startup-cards">
                    <div className="startup-flexContent">
                      <div>
                        <img src={f.svg} alt="" />
                      </div>
                      <div>
                        <h3>{f.heading}</h3>
                      </div>
                    </div>
                    <div className="prototype-img">
                      <img src={f.image} alt="" />
                    </div>
                    <div className="prototype-content">
                      <h5>{f.title}</h5>
                      <p>{f.description}</p>
                      <Button varient="primary">{f.button}</Button>
                    </div>
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

export default StartUpUxServices;
