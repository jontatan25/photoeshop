import React from "react";
import "./ItemDetailProperties.css";

const ItemDetailProperties = () => {
  return (
    <div className="itemDetail__container-right">
      <p className="itemDetail__container-right-title">Titulo Producto</p>
      <div className="itemDetail__container-right-properties">
        <p className="itemDetail__container-right-properties-price">Price</p>
        <p className="itemDetail__container-right-properties-subtitle">
          Description
        </p>

        <p className="itemDetail__container-right-properties-option">Option</p>
        <ul className="itemDetail__container-right-properties-form">
          <li>
            <button>1</button>
          </li>
          <li>
            <button>2</button>
          </li>
          <li>
            <button>3</button>
          </li>
          <li>
            <button>4</button>
          </li>
        </ul>
        <button className="itemDetail__container-right-properties-button">ADD TO CART</button>
        <h3 className="itemDetail__container-right-properties-footertitle">
          PRODUCT DESCRIPTION
        </h3>
        <p className="itemDetail__container-right-properties-footertext">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus iusto magnam, repellat dolorum quia cupiditate suscipit saepe eligendi alias reprehenderit!</p>
      </div>
    </div>
  );
};

export default ItemDetailProperties;
