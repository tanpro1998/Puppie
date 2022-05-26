import React, { useEffect, useState } from "react";
import "./home.scss";
import Navbar from "../../components/Navbar/Navbar";
import Helmet from "../../components/Helmet/Helmet";
import Header from "../../components/Header/Header";
import Select from "../../components/Select/Select";
import SmallBreed from "../../components/SmallBreed/SmallBreed";
import LargeBreed from "../../components/LargeBreed/LargeBreed";
import MixBreed from "../../components/MixBreed/MixBreed";
import TopScroll from "../../components/TopScroll/TopScroll";
import Approved from "../../components/Approved/Approved";
import Featured from "../../components/Featured/Featured";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    });
  }, []);

  return (
    <div className="home">
      <Helmet title="Home Page">
        <Navbar />
        <Header />
        <Select />
        <SmallBreed />
        <LargeBreed />
        <MixBreed />
        <Approved />
        <Featured />
        <Footer />
        {showTopButton && <TopScroll />}
      </Helmet>
    </div>
  );
};

export default Home;
