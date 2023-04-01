import React from "react";
import "./LatestNews.scss";
import { LatestNewsData } from "./data";

const LatestNews = () => {
  return (
    <div className="latest-news">
      <h1>Latest NEWS.</h1>
      <div className="latest-news-divisions">
        {LatestNewsData.map((f, i) => (
          <div className="latest-news-columns">
            <div className="first-column">
              <img src={f.firstImage} alt="" />
              <h2>{f.firstHeading}</h2>
              <p>{f.firstContent}</p>
            </div>
            <div className="second-column">
              <img src={f.secondImage} alt="" />

              <p>{f.secondContent}</p>
              <h2>{f.secondHeading}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
