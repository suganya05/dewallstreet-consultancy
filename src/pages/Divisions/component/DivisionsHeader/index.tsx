import React from "react";
import "../DivisionsCard/DivisionsCard.scss";

import Rocket from "../../../../assets/images/rocket.svg";
const DivisionsHeader = () => {
  return (
    <div className="division-header">
      <div className="division-header-title">
        <img src={Rocket} alt="" />
        <h1>
          The <span> success formula </span> we invented for any business,
          organization to succeed <span>.</span>
        </h1>
      </div>
      <div className="division-header-content">
        <p>
          No worries anymore, whether you are building a startup, enterprise,
          corporate, trust or any organizations. Take easy steps with our custom
          built divisions and focus on your core missions while outsourcing the
          rest of works from our dedicated service divisions.
        </p>
      </div>
    </div>
  );
};

export default DivisionsHeader;
