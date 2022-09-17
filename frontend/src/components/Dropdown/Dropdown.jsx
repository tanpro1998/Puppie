import React from "react";
import { useSelector } from "react-redux";
import "./dropDown.scss";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const { dogs } = useSelector((state) => state.dogs);
  const smallBreed = dogs.filter((dog) => dog.size === "small");
  const largeBreed = dogs.filter((dog) => dog.size === "large");
  const mixBreed = dogs.filter((dog) => dog.size === "mix");

  return (
    <div className="dropdown">
      <div className="wrapper">
        <div className="item">
          <h2 className="item-title">Small Breeds</h2>
          {smallBreed.map((item, index) => (
            <div className="name" key={index}>
              <Link
                to={`/${item.breed}`}
                style={{
                  color: "inherit",
                  margin: "1rem",
                }}
              >
                <span>{item.name}</span>
              </Link>
            </div>
          ))}
        </div>
        <div className="item">
          <h2 className="item-title">Large Breeds</h2>
          {largeBreed.map((item, index) => (
            <div className="name" key={index}>
              <Link
                to={`/${item.breed}`}
                style={{
                  color: "inherit",
                  margin: "1rem",
                }}
              >
                <span>{item.name}</span>
              </Link>
            </div>
          ))}
        </div>
        <div className="item">
          <h2 className="item-title">Mix Breeds</h2>
          {mixBreed.map((item, index) => (
            <div className="name" key={index}>
              <Link
                to={`/${item.breed}`}
                style={{
                  color: "inherit",
                  margin: "1rem",
                }}
              >
                <span>{item.name}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
