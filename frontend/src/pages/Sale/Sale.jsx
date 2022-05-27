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
          <img src={dog.image} alt="" />
          <div className="sale-text">
            <h1>{dog.name} Puppies For Sale</h1>
            <h2>{dog.name} CHARACTERISTICS:</h2>
            <div className="character">
              <div className="character-item">
                <p>ADAPTABILITY</p>
                <div className="rating">
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                </div>
              </div>
              <div className="character-item">
                <p>FRIENDLINESS</p>
                <div className="rating">
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                </div>
              </div>
              <div className="character-item">
                <p>HEALTH GROOMING</p>
                <div className="rating">
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                </div>
              </div>
              <div className="character-item">
                <p>TRAINABILITY</p>
                <div className="rating">
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="images">
          <div className="images-card">
            <img
              src="https://thuvienthucung.com/wp-content/uploads/2021/09/Cho-Chihuahua-Dac-Diem-Noi-Bat-Cach-Nuoi-Cham-Soc.jpg"
              alt=""
            />
          </div>
          <div className="images-card">
            <img
              src="https://thuvienthucung.com/wp-content/uploads/2021/09/Cho-Chihuahua-Dac-Diem-Noi-Bat-Cach-Nuoi-Cham-Soc.jpg"
              alt=""
            />
          </div>
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
          <img src={dog.image} alt="" />
          <div className="text">
            <h1>{dog.name} Highlights</h1>
            <p>
              Don’t be fooled by the Chihuahua’s small size as it does not
              always mean that they are very adaptable. Chihuahuas are curious
              and bold explorers. They’ve escaped from yards through small gaps
              in the fence and can squeeze into places that other puppies and
              dogs wouldn’t be able to fit. Dog obedience training is a must to
              make him a wonderful go-everywhere companion. Despite being the
              world’s smallest dog, the Chihuahua may well have the world’s
              biggest personality hidden inside that tiny body. The fearless
              Chihuahua will often boss around dogs much bigger than he is, and
              this may or may not cause problems. Chihuahuas often bond to a
              single person, although they’re usually willing to make friends
              with new people if properly introduced. Ears are an important area
              to check when you are grooming your Chihuahua. If you smell an
              odor or see wax, clean the inner ear with a cotton ball, using a
              cleanser recommended by your veterinarian. Also the nails will
              grow rather quick so constant watch and nail clipping is a must.
              Otherwise, the Chihuahua is a wash and go breed and is generally a
              healthy dog overall. Chihuahuas are as easy to housetrain using
              positive reinforcement techniques such as food rewards, praise,
              and play, and you will be surprised that he can learn anything you
              can teach. More importantly, do not forget to do crate training as
              it is a way to ensure that your Chihuahua doesn’t get into things
              he shouldn’t. The amount of energy a Chihuahua has can be
              surprising which means that you will enjoy playing with him.
              However, they’ll play and chase until they drop, so make sure that
              you supervise every physical activity.
            </p>
          </div>
        </div>
        <Footer />
      </Helmet>
    </div>
  );
};

export default Sale;
