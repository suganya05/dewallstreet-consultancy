import React from "react";
import "./Collaborate.scss";
import { CollaborateData } from "./data";

interface ICollaborate {
  title: string;
  textAlign:
    | "start"
    | "end"
    | "left"
    | "right"
    | "center"
    | "justify"
    | "match-parent";
  heading?: string;
}

const Collaborate: React.FC<ICollaborate> = ({ title, textAlign, heading }) => {
  return (
    <div className="mx" id="benefits">
      <div className="heading">
        <p>{heading}</p>
      </div>
      <div className="Collaborate">
        <h1>{title}</h1>
        <div className="collaborate-content">
          {CollaborateData.map((f, i) => (
            <div key={i} className="detail" style={{ textAlign: textAlign }}>
              <f.icon />
              <h2>{f.title}</h2>
              <p>{f.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
