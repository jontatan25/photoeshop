import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";


const Item = ({ data }) => {
  return (
    <>
      {data &&
        data.map((item) => (
          <div className="itemcontainer__item" key={item.id}>
            <div
              className="itemcontainer__item-img"
              style={{ backgroundImage: `url(${item.src.portrait})` }}
            ></div>
            <div className="itemcontainer__item-body">
              <h5>{item.photographer}</h5>
              <p>{item.alt}</p>
              <Link to ={`./Item/${item.id}`}>
              <button>More Details</button>
              </Link>
            </div>
          </div>
        ))}
    </>
  );
};

export default Item;
