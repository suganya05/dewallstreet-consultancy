import React from "react";
import { ReactComponent as ChevronRight } from "../../assets/icons/chevron-right.svg";
import Button from "../Button/Button";
import "./IdeaToProtoTypeHeader.scss";

const IdeaToProtoTypeHeader: React.FC = () => {
  return (
    <div className="idea-protoType-wrapper">
      <div className="mx">
        <div className="idea-protoType-container">
          <div className="idea-flex-content">
            <div className="ux-content">
              <div>
                <ChevronRight />
              </div>
              <div className="ux-box">
                <h1>UX</h1>
              </div>
            </div>
            <div className="idea-content">
              <div className="p-box">
                <h1>12P</h1>
              </div>
              <div>
                <h3>Idea to</h3>
                <h3>Prototype</h3>
              </div>
            </div>
          </div>

          <ul className="navigation">
            <li>
              <a href="#over-view">OVER VIEW</a>
            </li>
            <li>
              <a href="#approach">APPROACH</a>
            </li>
            <li>
              <a href="#portfolio">PORTFOLIO</a>
            </li>
            <li>
              <a href="#benefits">BENEFITS</a>
            </li>
            <li>
              <a href="#">TESTIMONIALS</a>
            </li>
          </ul>

          <div className="idea-protoType-btn">
            <Button varient="primary">Schedule an appointment</Button>
          </div>
        </div>
      </div>

      <ul className="media-navigation">
        <li>
          <a href="#">OVER VIEW</a>
        </li>
        <li>
          <a href="#">APPROACH</a>
        </li>
        <li>
          <a href="#">PORTFOLIO</a>
        </li>
        <li>
          <a href="#">BENEFITS</a>
        </li>
        <li>
          <a href="#">TESTIMONIALS</a>
        </li>
      </ul>
    </div>
  );
};

export default IdeaToProtoTypeHeader;
