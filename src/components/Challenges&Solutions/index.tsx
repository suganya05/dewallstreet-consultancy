import React from "react";
import { ChallengesAndSolutionsData } from "./data";
import "./ChallengesAndSolutions.scss";
const ChallengesAndSolutions = () => {
  return (
    <div className="challengesandsolutions">
      {ChallengesAndSolutionsData.map((f) => (
        <div className="challanges-solution">
          <h1>{f.title}.</h1>
          <img src={f.image} alt="" />
          {f.content.map((f) => (
            <div className="challanges-solution-content">
              <f.icon />
              <div className="description">
                <h2>{f.heading}</h2>
                <p>{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ChallengesAndSolutions;
