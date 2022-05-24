import React from "react";
import "./approved.scss";

const Approved = () => {
  return (
    <div className="approve">
      <div className="title">
        <h1>HDB APPROVED BREEDS</h1>
      </div>
      <div className="card">
        <div className="card-item">
          <img src="/image/hdb-dog.jpg" alt="" />
          <span className="name">Name</span>
        </div>
        <div className="card-item">
          <img src="/image/hdb-dog.jpg" alt="" />
          <span className="name">Name</span>
        </div>
        <div className="card-item">
          <img src="/image/hdb-dog.jpg" alt="" />
          <span className="name">Name</span>
        </div>
        <div className="card-item">
          <img src="/image/hdb-dog.jpg" alt="" />
          <span className="name">Name</span>
        </div>
      </div>
    </div>
  );
};

export default Approved;
