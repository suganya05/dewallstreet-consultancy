import React from "react";
import HorizontalScroll from "react-scroll-horizontal";
import "./Scrolling.scss";

const Scrolling: React.FC = () => {
  const child = { width: `30em`, height: `100%` };
  return (
    <div className="App">
      <HorizontalScroll>
        <div style={child}>
          <h1>Hello 1</h1>
        </div>
        <div style={child}>
          <h1>Hello 2</h1>
        </div>

        <div style={child}>
          <h1>Hello 3</h1>
        </div>
      </HorizontalScroll>
    </div>
  );
};

export default Scrolling;
