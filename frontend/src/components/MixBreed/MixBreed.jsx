import React from "react";
import "./mixBreed.scss";
import { useSelector } from "react-redux";

const MixBreed = () => {
  const { dogs } = useSelector((state) => state.dogs);
  const mixDogs = dogs.filter((dog) => dog.size === "mix");
  return (
    <div className="mix" id="mx">
      <div className="title">
        <h1>MIX BREEDS</h1>
      </div>
      <div className="card">
        {mixDogs.map((dog, index) => (
          <div className="card-item" key={index}>
            <img src={dog.image} alt="" />
            <span className="name">{dog.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MixBreed;
