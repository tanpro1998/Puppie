import React from "react";
import "./listLink.scss";

const ListLink = () => {
  return (
    <div className="list">
      <div className="list-item">
        <h2>HDB Approved</h2>
        <div className="item">
          <span>
            <a href="#dog_1">Beagle</a>
          </span>
          <span>
            <a href="#dog_2">Bichon</a>
          </span>
          <span>
            <a href="#dog_3">Cavalier King Charles</a>
          </span>
          <span>Chihuahua</span>
          <span>Dachshund</span>
          <span> Japanese Spitz</span>
          <span>Jack Russel Terrier</span>
          <span>Maltese</span>
          <span>Pug</span>
          <span>Shih Tzu</span>
        </div>
      </div>
      <div className="list-item">
        <h2>Mixed Breed</h2>
        <div className="item">
          <span>Beaglier</span>
          <span>Cavapoo</span>
          <span>Labradoodle</span>
          <span>Maltipoo</span>
          <span>Dachshund</span>
          <span>Morkie</span>
          <span>Pomchowsky</span>
        </div>
      </div>
      <div className="list-item">
        <h2>Non HDB Approved</h2>
        <div className="item">
          <span>
            <a href="#dog_4">Cocker Spaniel</a>
          </span>
          <span>British Bulldog</span>
          <span>Border Collie</span>
          <span>Corgi</span>
          <span>Chow Chow</span>
          <span>French Bulldog</span>
          <span>Golden Retriever</span>
          <span>Husky</span>
          <span>Labrador</span>
          <span>Shiba Inu</span>
        </div>
      </div>
    </div>
  );
};

export default ListLink;
