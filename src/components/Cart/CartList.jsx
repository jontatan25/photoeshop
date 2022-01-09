import React from "react";
import CartItemList from "../CartItemList/CartItemList";
import "./CartList.css";

const CartList = () => {
  return (
    <div className="cartContainer__list">
      <div className="cartContainer__list-title">
        <h3>Shopping Cart.</h3>
      </div>
      <ul className="cartContainer__list-titles">
        <li>Product</li>
        <li>Size</li>
        <li>Quantity</li>
        <li>Total Price</li>
      </ul>
      <CartItemList />
      <div className="cartContainer__list-footer">  
          <a href="" className="list-footer_BackButton">
            &lt; continue Shopping
          </a>
        <ul className="cartContainer__footerPrice">
          <li>
            <p className="cartContainer__footerPrice-Title">Subtotal</p>
            <p className="cartContainer__footerPrice-Number">$470.98</p>
          </li>
          <li >
            <p className="cartContainer__footerPrice-Title">Shipping</p> 
            <p className="cartContainer__footerPrice-Number">Free</p>
          </li>
          <li >
              <p className="cartContainer__footerPrice-Total">Total</p>
              <p className="cartContainer__footerPrice-Total">$470.98</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CartList;
