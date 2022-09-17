import React from "react";
import "./largeBreed.scss";
import { useSelector } from "react-redux";

const LargeBreed = () => {
  const { dogs } = useSelector((state) => state.dogs);
  const largeDogs = dogs.filter((dog) => dog.size === "large");
  return (
    <div className="large" id="lg">
      <div className="title">
        <h1>LARGE BREEDS</h1>
      </div>
      <div className="card">
        {largeDogs.map((dog, index) => (
          <div className="card-item" key={index}>
            <img src={dog.image} alt="" />
            <span className="name">{dog.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LargeBreed;
