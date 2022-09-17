import React from "react";
import { useSelector } from "react-redux";
import "./approved.scss";

const Approved = () => {
  const { dogs } = useSelector((state) => state.dogs);

  return (
    <div className="approve" id="apr">
      <div className="title">
        <h1>HDB APPROVED BREEDS</h1>
      </div>
      <div className="card">
        {dogs.map((dog, index) => (
          <div className="card-item" key={index}>
            <img src={dog.image} alt="" />
            <span className="name">{dog.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Approved;
