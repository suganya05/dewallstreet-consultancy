import React from "react";
import ChallengesAndSolutions from "../../components/Challenges&Solutions";
import ImproveBuisness from "../../components/ImproveBuisness";
import Collaborate from "../../components/Collaborate";
import LatestNews from "../../components/LatestNews";
import LogoDark from "../../assets/icons/logo-dark.svg";

const WebDevelopment: React.FC = () => {
  return (
    <div>
      <div className="webdevelopment-hero">
        <img src={LogoDark} alt="" />
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
      <ChallengesAndSolutions />
      <ImproveBuisness />
      <Collaborate title="How we collaborate  with you." textAlign="left" />
      <LatestNews />
    </div>
  );
};

export default WebDevelopment;
