import React from "react";
import "./CartPayment.css";
import { GoCreditCard } from "react-icons/go";
import { BsPaypal } from "react-icons/bs";

const CartPayment = () => {
  return (
    <div className="cartContainer__payment">
      <div className="cartContainer__payment-title">
        <h3>Payment Info</h3>
      </div>
      <form action="">
        <fieldset className="cartContainer__payment-formField">
          <legend className="cartContainer__payment-formFieldTitle">
            Payment method
          </legend>
          <div className="cartContainer__payment-formFieldContainer">
            <input
              type="radio"
              id="creditCard"
              name="paymentMethod"
              value="creditCard"
            ></input>
            <GoCreditCard className="formFieldContainer__icon" size="20px" />
            <label for="creditCard">Credit Card</label>
          </div>
          <div className="cartContainer__payment-formFieldContainer">
            <input
              type="radio"
              id="paypal"
              name="paymentMethod"
              value="paypal"
            ></input>
            <BsPaypal className="formFieldContainer__icon" size="20px" />
            <label for="paypal">Paypal</label>
          </div>
        </fieldset>
        <fieldset className="cartContainer__payment-formField">
          <legend className="cartContainer__payment-formFieldTitle">Name On Card</legend>
          <input type="text" name="cardName" maxlength="50"/>
        </fieldset>
        <fieldset className="cartContainer__payment-formField">
          <legend className="cartContainer__payment-formFieldTitle">Card Number</legend>
          <input className="formField__card" name="cardFirst" maxLength="4" type="text" /> -
          <input className="formField__card" name="cardSecond" maxLength="4" type="text" /> -
          <input className="formField__card" name="cardThirs" maxLength="4" type="text" /> -
          <input className="formField__card" name="cardFourth" maxLength="4" type="text" />
        </fieldset>
        <fieldset className="cartContainer__payment-formField" id="formField__last">
          <div className="formField__expirationContainer">
            <div className="formField__expirationContainerLeft">
              <legend className="cartContainer__payment-formFieldTitle">Expiration Date:</legend>
              <select name="expireMM" id="expireMM">
                <option value="">Month</option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
              <select name="expireYY" id="expireYY">
                <option value="">Year</option>
                <option value="22">2022</option>
                <option value="23">2023</option>
                <option value="24">2024</option>
                <option value="25">2025</option>
                <option value="26">2026</option>
              </select>
            </div>
            <div className="formField__expirationContainerRight">
              <legend className="cartContainer__payment-formFieldTitle">CVV:</legend>
              <input className="formField__cvv" name="cvv" id="cvv"type="text" maxLength={3} />
            </div>
          </div>
        </fieldset>
        <div className="cartContainer__payment-ContainerButton">
        <button className="cartContainer__payment-button">Check Out</button>
        </div>
      </form>
      
    </div>
  );
};

export default CartPayment;
