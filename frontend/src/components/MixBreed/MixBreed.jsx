import React from "react";
import "./mixBreed.scss";

const MixBreed = () => {
  return (
    <div className="mix">
      <div className="title">
        <h1>MIX BREEDS</h1>
      </div>
      <div className="card">
        <div className="card-item">
          <img src="/image/mix-dog.jpg" alt="" />
          <span className="name">Name</span>
        </div>
        <div className="card-item">
          <img src="/image/mix-dog.jpg" alt="" />
          <span className="name">Name</span>
        </div>
        <div className="card-item">
          <img src="/image/mix-dog.jpg" alt="" />
          <span className="name">Name</span>
        </div>
        <div className="card-item">
          <img src="/image/mix-dog.jpg" alt="" />
          <span className="name">Name</span>
        </div>
      </div>
    </div>
  );
};

export default MixBreed;
