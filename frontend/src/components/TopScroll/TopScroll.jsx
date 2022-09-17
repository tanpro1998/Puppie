import React from "react";
import "./topScroll.scss";
import { UpOutlined } from "@ant-design/icons";

const TopScroll = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button className="btn-top" onClick={goToTop}>
      <UpOutlined />
    </button>
  );
};

export default TopScroll;
