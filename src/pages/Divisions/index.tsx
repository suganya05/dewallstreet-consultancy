import React from "react";
import DivisionsCard from "./component/DivisionsCard";
import "./component/DivisionsCard/DivisionsCard.scss";
import DivisionsHeader from "./component/DivisionsHeader";
import ChallengesAndSolutions from "../../components/Challenges&Solutions";
import ImproveBuisness from "../../components/ImproveBuisness";
import Collaborate from "./component/Collaborate";
import LatestNews from "../../components/LatestNews";

const Divisions: React.FC = () => {
  return (
    <>
      <div className="division-parent">
        <div className="divisions">
          <DivisionsHeader />
          <DivisionsCard />
        </div>
      </div>
      <ChallengesAndSolutions />
      <ImproveBuisness />
      <Collaborate title="How we collaborate  with you." textAlign="left" />
      <LatestNews />
    </>
  );
};

export default Divisions;
