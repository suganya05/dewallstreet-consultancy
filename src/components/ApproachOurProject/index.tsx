import React from "react";
import { ReactComponent as ArrowLeft } from "../../assets/icons/arrow-down-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrow-down-right.svg";
import { IApproachOurProject } from "./ApproachOurProject";
import HorizontalScroll from "react-scroll-horizontal";
import "./ApproachOurProject.scss";

const ApproachOurProject: React.FC = () => {
  const child = { width: `30em`, height: `100%` };
  return (
    <div className="approachOurProject-wrapper" id="approach">
      <div className="mx">
        <div className="approachOurProject-container">
          <h1>How we approach our Projects</h1>
          <div className="approachOurProject-flex-content">
            <div>
              <p>Pre production</p>
            </div>
            <div>
              <p>Production</p>
            </div>
            <div>
              <p>Post production</p>
            </div>
          </div>

          <div className="slider-content">
            <div className="arrow">
              <ArrowLeft />
            </div>
            <div className="horizontal">
              <HorizontalScroll>
                <div style={child} className="flex">
                  {IApproachOurProject.map((f, index) => {
                    return (
                      <div key={index} className="approachOur-flex-content">
                        <div className="approachOur-img">
                          <img src={f.image.src} alt={f.image.alt} />
                        </div>
                        <div className="approachour-content">
                          <h5>{f.title}</h5>
                          <p>{f.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </HorizontalScroll>
            </div>
            <div className="arrow">
              <ArrowRight />
            </div>
          </div>

          <div className="slider-content-media">
            <div className="arrow">
              <ArrowLeft />
            </div>

            {IApproachOurProject.map((f, index) => {
              return (
                <div key={index} className="approachOur-flex-content">
                  <div className="approachOur-img">
                    <img src={f.image.src} alt={f.image.alt} />
                  </div>
                  <div className="approachour-content">
                    <h5>{f.title}</h5>
                    <p>{f.description}</p>
                  </div>
                </div>
              );
            })}

            <div className="arrow">
              <ArrowRight />
            </div>
          </div>

          {/* <div className="circle-content">
            <div className="circle-one circle">
              <h5>01</h5>
            </div>
            <div className="circle-two circle">
              <h5>02</h5>
            </div>
            <div className="circle-three circle">
              <h5>03</h5>
            </div>
            <div className="circle-four circle">
              <h5>04</h5>
            </div>
            <div className="circle-five circle">
              <h5>05</h5>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ApproachOurProject;
