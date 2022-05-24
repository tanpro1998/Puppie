import React from "react";
import Helmet from "../../components/Helmet/Helmet";
import Navbar from "../../components/Navbar/Navbar";
import "./available.scss";

const Available = () => {
  return (
    <div className="available">
      <Helmet title="Avalable Page">
        <Navbar />
      </Helmet>
    </div>
  );
};

export default Available;
