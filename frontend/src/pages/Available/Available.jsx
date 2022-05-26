import React, { useEffect, useState } from "react";
import Helmet from "../../components/Helmet/Helmet";
import Navbar from "../../components/Navbar/Navbar";
import "./available.scss";
import {
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import ListLink from "../../components/ListLink/ListLink";
import Puppies from "../../components/Puppies/Puppies";
import TopScroll from "../../components/TopScroll/TopScroll";
import { useSelector } from "react-redux";

const Available = () => {
  const { available } = useSelector((state) => state.available);
  const beagle = available.filter((item) => item.breed === "beagle");
  const bichon = available.filter((item) => item.breed === "bichon");
  const cavalier = available.filter((item) => item.breed === "cavalier");
  const cockapoo = available.filter((item) => item.breed === "cockapoo");
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    });
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="available">
      <Helmet title="Avalable Page">
        <Navbar />
        <div className="available-header">
          <img
            src="https://www.lawnstarter.com/blog/wp-content/uploads/2018/07/happy-dog-2.jpg"
            alt=""
          />
          <div className="available-text">
            <h1>All Available Puppies</h1>
            <p>Only the Best for Our Best Friends</p>
            <span className="get-new" onClick={() => window.location.reload()}>
              {" "}
              <LoadingOutlined className="loading" />
              Get notified with our latest puppies
            </span>
            <div className="social-icon">
              <FacebookOutlined className="icon" />
              <InstagramOutlined className="icon" />
              <MailOutlined className="icon" />
            </div>
          </div>
        </div>
        <div className="available-main"></div>
        <ListLink />
        <Puppies id="dog_1" dog={beagle} />
        <Puppies id="dog_2" dog={bichon} />
        <Puppies id="dog_3" dog={cavalier} />
        <Puppies id="dog_4" dog={cockapoo} />
        {showTopButton && <TopScroll />}
      </Helmet>
    </div>
  );
};

export default Available;
