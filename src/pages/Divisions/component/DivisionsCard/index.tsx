import React from "react";
import { DivisionsData } from "./data";
import DewallLogo from "../../../../assets/icons/dewall-logo.svg";
import { ReactComponent as Arrow } from "../../../../assets/icons/arrow-right.svg";
import "./DivisionsCard.scss";

const DivisionsCard = () => {
  return (
    <div className="division-card">
      {DivisionsData.map((f, i) => (
        <div key={i}>
          <div className="first-layer">
            <img src={f.icons} alt="" />
            <img src={DewallLogo} alt="" />
            <p>{f.title}</p>
          </div>
          <div className="second-layer-parent">
            {f.content.map((f, i) => (
              <div key={i} className="second-layer">
                {/* <img src={Arrow} alt="" /> */}
                <Arrow />
                <p>{f}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DivisionsCard;
