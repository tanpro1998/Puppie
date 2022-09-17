import React from "react";
import "./smallBreed.scss";
import { useSelector } from "react-redux";

const SmallBreed = () => {
  const { dogs } = useSelector((state) => state.dogs);
  const smallDogs = dogs.filter((dog) => dog.size === "small");

  return (
    <div className="small" id="sm">
      <div className="title">
        <h1>SMALL BREEDS</h1>
      </div>
      <div className="card">
        {smallDogs.map((dog, index) => (
          <div className="card-item" key={index}>
            <img src={dog?.image} alt="" />
            <span className="name">{dog?.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallBreed;
