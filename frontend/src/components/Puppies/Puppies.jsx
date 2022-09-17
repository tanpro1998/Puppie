import {
  FacebookOutlined,
  InstagramOutlined,
  LikeOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import React from "react";
import PuppieItem from "../PuppieItem/PuppieItem";
import "./puppies.scss";

const Puppies = ({ id, dog }) => {
  return (
    <div className="puppies" id={id}>
      <div className="puppies-img">
        {dog.map((item, index) => (
          <PuppieItem key={index} item={item} />
        ))}
      </div>
      <div className="puppies-link">
        <h2>Contact Us for Pricing & Viewing Location</h2>
        <div className="link">
          <div className="whatsApp same">
            WhatsApp Us
            <MessageOutlined className="icon" />
          </div>
          <div className="facebook same">
            FB Messenger
            <FacebookOutlined className="icon" />
          </div>
          <div className="like same">
            Like & Share
            <LikeOutlined className="icon" />
          </div>
          <div className="instagram same">
            Follow on IG
            <InstagramOutlined className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Puppies;
