import React from "react";
import "./ImproveBuisness.scss";
import Before from "../../assets/images/improve-buisness.jpg";
import After from "../../assets/images/improve-buisness.jpg";

const ImproveBuisness = () => {
  return (
    <div className="improve-buisness">
      <h1>How our work improves your business.</h1>
      <div className="improve-buisness-content">
        <div className="details">
          <img src={Before} alt="" />
          <p>Before</p>
        </div>

        <div className="details">
          <img src={After} alt="" />
          <p>After</p>
        </div>
      </div>
    </div>
  );
};

export default ImproveBuisness;
