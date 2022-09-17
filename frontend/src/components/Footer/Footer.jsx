import React from "react";
import "./footer.scss";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="footer">
      <h2>Design by Flash.</h2>
      <div className="social-link">
        <FacebookOutlined className="icon" />
        <InstagramOutlined className="icon" />
        <LinkedinOutlined className="icon" />
        <YoutubeOutlined className="icon " />
      </div>
    </div>
  );
};

export default Footer;
