import React from "react";
import ApproachOurProject from "../ApproachOurProject";
import IdeaToProtoTypeHeader from "../IdeaToProtoTypeHeader";
import "./InterActive.scss";
import PortFolio from "../PortFolio";

const InterActiveProtoType: React.FC = () => {
  return (
    <>
      <IdeaToProtoTypeHeader />
      <div className="inter-active-wrapper">
        <div className="mx">
          <div className="inter-active-container">
            <h1>
              We bring our client’s ideas to life and create an Interactive
              prototype.
            </h1>
            <div className="inter-active-video">
              <video
                src="https://ik.imagekit.io/d4cf2o3ja/video.mp4?updatedAt=1680083404680"
                autoPlay
                loop
                muted
                width="100%"
                height="100%"
              ></video>
            </div>
            <div className="inter-active-flex-content">
              <div className="para-content">
                <h2>
                  50<span>+</span>
                </h2>
                <p>Happy clients</p>
              </div>
              <div className="para-content">
                <h2>
                  50<span>+</span>
                </h2>
                <p>Completed project</p>
              </div>
              <div className="para-content">
                <h2>
                  100<span>%</span>
                </h2>
                <p>Dedicated team</p>
              </div>
              <div className="para-content">
                <h2>
                  100<span>%</span>
                </h2>
                <p>Dedicated team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ApproachOurProject />
      <PortFolio />
    </>
  );
};

export default InterActiveProtoType;
