import React from "react";
import Footer from "../../components/Footer/Footer";
import Helmet from "../../components/Helmet/Helmet";
import Navbar from "../../components/Navbar/Navbar";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <Helmet title="Contact Page">
        <Navbar />
        <div className="contact-header">
          <img
            src="https://www.wondriumdaily.com/wp-content/uploads/2019/10/Dog-Training-Feature-1024x555.jpg"
            alt=""
          />
          <div className="contact-text">
            <h1>Contact Us</h1>
            <p>
              <span>Facebook:</span>
              <span>
                <a href="https://www.facebook.com/tan.duongtranthanh/">
                  facebook.com/tan.duongtranthanh
                </a>
              </span>
            </p>
            <p>
              <span>Email:</span>
              <span>davidtanpro1998@gmail.com</span>
            </p>
            <p>
              <span>Phone:</span>
              <span>+84 964903991</span>
            </p>
          </div>
        </div>
        <Footer />
      </Helmet>
    </div>
  );
};

export default Contact;
