import React from "react";
import "./select.scss";

const Select = () => {
  return (
    <div className="select">
      <div className="select__item">
        <img src="/image/small-dog.jpg" alt="" />
        <span className="size">Small Breed</span>
        <span className="desc">
          Maltese, Pomeranian, Corgi Chihuahua, Japanese Splitz...
        </span>
      </div>
      <div className="select__item">
        <img src="/image/large-dog.jpg" alt="" />
        <span className="size">Large Breed</span>
        <span className="desc">
          Golden Retriever, Siberian Husky. Chow Chow, Schnauzer.
        </span>
      </div>
      <div className="select__item">
        <img src="/image/mix-dog.jpg" alt="" />
        <span className="size">Mix Breed</span>
        <span className="desc">Cavapoo, Maltipoo, Morkie, Labradoodle</span>
      </div>
      <div className="select__item">
        <img src="/image/hdb-dog.jpg" alt="" />
        <span className="size">HDB Approved</span>
        <span className="desc">
          Cavalier King Charles, Pug. Shih Tzu, Yorkshire Terrier.
        </span>
      </div>
    </div>
  );
};

export default Select;
