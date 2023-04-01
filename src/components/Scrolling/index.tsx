import React, { useState } from "react";
import "./Scrolling.scss";

const list = [
  { name: "Item 1" },
  { name: "Item 2" },
  { name: "Item 3" },
  { name: "Item 4" },
  { name: "Item 5" },
  { name: "Item 5" },
  { name: "Item 5" },
  { name: "Item 5" },
  { name: "Item 5" },
  { name: "Item 5" },
];

const Scrolling: React.FC = () => {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrowClick = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightArrowClick = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listWidth = list.length * 150;
    if (window.innerWidth - listWidth > x) {
      x = window.innerWidth - listWidth - 60;
    }
    setScrollX(x);
  };

  return (
    <div>
      <div>Scrolling</div>
      <div
        className="horizontal-scroll-wrapper"
        style={{ transform: `translateX(${scrollX}px)` }}
      >
        {list.map((item, index) => (
          <div key={index} className="horizontal-scroll-item">
            {item.name}
          </div>
        ))}
      </div>
      <div className="left-arrow" onClick={handleLeftArrowClick}>
        &lt;
      </div>
      <div className="right-arrow" onClick={handleRightArrowClick}>
        &gt;
      </div>
    </div>
  );
};

export default Scrolling;
