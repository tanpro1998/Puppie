import React, { useEffect, useState } from "react";
import Helmet from "../../components/Helmet/Helmet";
import Navbar from "../../components/Navbar/Navbar";
import "./sale.scss";
import {
  FacebookOutlined,
  InstagramOutlined,
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
} from "@ant-design/icons";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Sale = () => {
  const { dogs } = useSelector((state) => state.dogs);
  const { slug } = useParams();
  const [dog, setDog] = useState({});

  useEffect(() => {
    setDog(dogs.find((d) => d.breed === slug));
    window.scrollTo(0, 0);
  }, [dogs, slug]);

  return (
    <div className="sale">
      <Helmet title="Sale Page">
        <Navbar />
        <div className="sale-header">
          <img src={dog?.image} alt="" />
          <div className="sale-text">
            <h1>{dog?.name} Puppies For Sale</h1>
            <h2>{dog?.name} CHARACTERISTICS:</h2>
            <div className="character">
              {dog?.rate?.map((d) => (
                <div className="character-item" key={d}>
                  <p>{d[0]}</p>
                  <div className="rating">
                    {d[1] === "1" ? (
                      <StarOutlined />
                    ) : d[1] === "2" ? (
                      <span>
                        <StarOutlined /> <StarOutlined />
                      </span>
                    ) : (
                      <span>
                        <StarOutlined /> <StarOutlined /> <StarOutlined />
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="images">
          {dog?.subImg?.map((d) => (
            <div className="images-card" key={d}>
              <img src={d} alt="" />
            </div>
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
        <div className="highlight">
          <img src={dog?.image} alt="" />
          <div className="text">
            <h1>{dog?.name} Highlights</h1>
            <p>{dog?.description}</p>
          </div>
        </div>
        <Footer />
      </Helmet>
    </div>
  );
};

export default Sale;
