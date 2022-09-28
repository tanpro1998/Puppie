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
  const chihuahua = available.filter((item) => item.breed === "chihuahua");
  const pug = available.filter((item) => item.breed === "pug");
  const husky = available.filter((item) => item.breed === "husky");
  const dachshund = available.filter((item) => item.breed === "dachshund");
  const maltese = available.filter((item) => item.breed === "maltese");
  const shinTzu = available.filter((item) => item.breed === "shin tzu");
  const beaglier = available.filter((item) => item.breed === "beaglier");
  const cavapoo = available.filter((item) => item.breed === "cavapoo");
  const labradoodle = available.filter((item) => item.breed === "labradoodle");
  const pomSky = available.filter((item) => item.breed === "pomsky");
  const japaneseSpitz = available.filter(
    (item) => item.breed === "japanese spits"
  );
  const jackRusselTerrier = available.filter(
    (item) => item.breed === "jack russell terrier"
  );
  const maltipoo = available.filter((item) => item.breed === "maltipoo");
  const morkie = available.filter((item) => item.breed === "morkie");
  const britishBulldog = available.filter(
    (item) => item.breed === "british bulldog"
  );
  const borderCollie = available.filter(
    (item) => item.breed === "border collie"
  );
  const corgi = available.filter((item) => item.breed === "corgi");
  const chowchow = available.filter((item) => item.breed === "chow chow");
  const frenchBulldog = available.filter(
    (item) => item.breed === "french bulldog"
  );
  const goldenRetriever = available.filter(
    (item) => item.breed === "golden retriever"
  );
  const labrador = available.filter((item) => item.breed === "labrador");
  const shibaInu = available.filter((item) => item.breed === "shiba inu");

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
  console.log(showTopButton);
  return (
    <div className="available">
      <Helmet title="Available Page">
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
        <Puppies id="dog_5" dog={chihuahua} />
        <Puppies id="dog_6" dog={pug} />
        <Puppies id="dog_7" dog={husky} />
        <Puppies id="dog_8" dog={dachshund} />
        <Puppies id="dog_9" dog={japaneseSpitz} />
        <Puppies id="dog_10" dog={jackRusselTerrier} />
        <Puppies id="dog_11" dog={maltese} />
        <Puppies id="dog_12" dog={shinTzu} />
        <Puppies id="dog_13" dog={beaglier} />
        <Puppies id="dog_14" dog={cavapoo} />
        <Puppies id="dog_15" dog={labradoodle} />
        <Puppies id="dog_16" dog={pomSky} />
        <Puppies id="dog_17" dog={maltipoo} />
        <Puppies id="dog_18" dog={morkie} />
        <Puppies id="dog_19" dog={britishBulldog} />
        <Puppies id="dog_20" dog={borderCollie} />
        <Puppies id="dog_21" dog={corgi} />
        <Puppies id="dog_22" dog={chowchow} />
        <Puppies id="dog_23" dog={frenchBulldog} />
        <Puppies id="dog_24" dog={goldenRetriever} />
        <Puppies id="dog_25" dog={labrador} />
        <Puppies id="dog_26" dog={shibaInu} />
        {showTopButton && <TopScroll />}
      </Helmet>
    </div>
  );
};

export default Available;
