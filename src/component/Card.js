
import React from "react";
import "./Card.css";
import i from "../asets/IMG_20210208_002427.jpg";
function Card({ title, id, tag }) {
  return (
    <div className="card">
      <div className="card-content">
        <p className="card-id">
          {id}
          {<img src={i} alt="img" />}
        </p>
        <h4 className="card-title">
          <b>{title}</b>
          <br />
        </h4>
        <div className="card-tag">
          <span>•</span> {tag}
        </div>
      </div>
    </div>
  );
}

export default Card;
