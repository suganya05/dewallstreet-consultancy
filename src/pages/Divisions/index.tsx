import React from "react";
import DivisionsCard from "./component/DivisionsCard";
import "./component/DivisionsCard/DivisionsCard.scss";
import DivisionsHeader from "./component/DivisionsHeader";

const Divisions: React.FC = () => {
  return (
    <>
      <div className="division-parent">
        <div className="divisions">
          <DivisionsHeader />
          <DivisionsCard />
        </div>
      </div>
    </>
  );
};

export default Divisions;
