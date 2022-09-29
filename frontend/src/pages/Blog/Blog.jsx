import React, { useEffect, useState } from "react";
import Helmet from "../../components/Helmet/Helmet";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./blog.scss";
import TopScroll from "../../components/TopScroll/TopScroll";

const Blog = () => {
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
    <div className="blog">
      <Helmet title="Blog Page">
        <Navbar />
        <div className="blog-header">
          <img
            src="https://joyfuldogs.co.uk/wp-content/uploads/2021/01/new-puppy.jpg"
            alt=""
          />
          <div className="blog-text">
            <h2>BLOG</h2>
            <h1>Our Puppy Blog</h1>
            <button className="btn">Subscribe</button>
          </div>
        </div>
        <div className="blog-card">
          <div className="card-item">
            <img
              src="https://www.animeddirect.co.uk/advice/wp-content/uploads/2022/02/Dog-scratching.jpg"
              alt=""
            />
            <h2>
              What Are the Services Offered by Pet Groomers in VietNam? Treat
              Your Pet Like Royalty
            </h2>
            <span>Hair & skin care</span>
            <p>
              If you live in Singapore, you are probably familiar with the
              concept of an HDB flat. These living units are designed for family
              groups and couples. They rank among some of the most expensive
              real estate properties you can get in the country, but the income
              of two...
            </p>
          </div>
          <div className="card-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFUlhNAFgaFvGCxYhKttZJWNuJJqqRK4dZGJhydSYCD5EPppQMvolpT6Zi-3b1XBWG9H4&usqp=CAU"
              alt=""
            />
            <h2>
              Brief Review of the Top Brands of Raw Foods for Pets in VietNam-
              Give Your Pet Well Balanced Diet
            </h2>
            <span>PUPPY FOOD</span>
            <p>
              Preparation of homemade foods is advantageous, but at times it can
              be tiring and tedious, don't worry raw foods is the perfect
              alternative while still offering all-around healthy benefits for
              your dog. Over a recent couple of years, the popularity of raw
              pet...
            </p>
          </div>
          <div className="card-item">
            <img
              src="https://blogapi.uber.com/wp-content/uploads/sites/381/2016/02/CHI_valentines-puppies_blog_960x540_r1.png"
              alt=""
            />
            <h2>
              Complete Guide To Some Of The Best Products You Can Use To Care
              For Your Dog Hair And Skin
            </h2>
            <span>GROOMING</span>
            <p>
              Owning a pet is a life fulfilling experience, we all want our pets
              to look beautiful and stylish and also to have the most attractive
              scent that will be the envy of most. Grooming is very important to
              pet as they will ultimately influence the health of both...
            </p>
          </div>
        </div>
        <div className="blog-letter">
          <img
            src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/HpUJdgiIxiy0v1k4f/videoblocks-cute-puppy-running-and-playing-baby-dog-4k_hvwq8rypg_thumbnail-1080_01.png"
            alt=""
          />
          <div className="blog-text">
            <form>
              <h1>Join Our Newsletter</h1>
              <input type="email" placeholder="Email" required />
              <button className="btn">Subscribe</button>
            </form>
          </div>
        </div>
        <Footer />
        {showTopButton && <TopScroll />}
      </Helmet>
    </div>
  );
};

export default Blog;
