import React from "react";
import "./puppieItem.scss";
import number from "../../utils/number";

const PuppieItem = ({ item }) => {
  return (
    <div className="pI">
      <div className="pI-card">
        <img src={item.image} alt="" />
        <div className="pI-text">
          <p>
            {item.name}
            <span className="sold">{item.sold === true ? "(Sold)" : ""}</span>
          </p>
          <span>
            <b>Gender: </b>
            {item.gender}
          </span>
          <span>
            <b>Age: </b>
            {item.age}
          </span>
          <span>
            <b>Price: </b>
            {number(item.price)} VND
          </span>
        </div>
      </div>
    </div>
  );
};

export default PuppieItem;
