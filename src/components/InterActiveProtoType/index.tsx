import React, { useEffect, useState } from "react";
import ApproachOurProject from "../ApproachOurProject";
import IdeaToProtoTypeHeader from "../IdeaToProtoTypeHeader";
import closeUp from "../../assets/icons/arrow-up.svg";
import "./InterActive.scss";
import PortFolio from "../PortFolio";
import Collaborate from "../Collaborate";

const InterActiveProtoType: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <IdeaToProtoTypeHeader />
      <div className="inter-active-wrapper" id="over-view">
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
      <Collaborate
        title="You’re one step away from making your ideas into reality."
        textAlign="center"
        heading="BENEFITS"
      />

      <div>
        {isVisible && (
          <div className="topButton" onClick={scrollToTop}>
            <img src={closeUp} alt="" />
          </div>
        )}
      </div>
    </>
  );
};

export default InterActiveProtoType;
