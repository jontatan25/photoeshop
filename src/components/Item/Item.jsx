import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ data }) => {

  return (
    <>
      {data &&
        data.map((item) => (
          <div className="itemcontainer__item" 
          key={item.id}
          >
            <div
              className="itemcontainer__item-img"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <div className="itemcontainer__item-body">
              <h4>{item.title}</h4>
              <p>${item.price} USD</p>
              <Link to ={`./item/${item.id}`}>
              <button>More Details</button>
              </Link>
            </div>
          </div>
        ))}
    </>
  );
};

export default Item;
