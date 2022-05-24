import React from "react";
import "./smallBreed.scss";

const SmallBreed = () => {
  return (
    <div className="small">
      <div className="title">
        <h1>SMALL BREEDS</h1>
      </div>
      <div className="card">
        <div className="card-item">
          <img src="/image/small-dog.jpg" alt="" />
          <span className="name">Name</span>
        </div>
        <div className="card-item">
          <img src="/image/small-dog.jpg" alt="" />
          <span className="name">Name</span>
        </div>
        <div className="card-item">
          <img src="/image/small-dog.jpg" alt="" />
          <span className="name">Name</span>
        </div>
        <div className="card-item">
          <img src="/image/small-dog.jpg" alt="" />
          <span className="name">Name</span>
        </div>
      </div>
    </div>
  );
};

export default SmallBreed;
