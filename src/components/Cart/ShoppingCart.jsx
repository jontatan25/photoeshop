import React from 'react'
import CartPayment from '../CartPayment/CartPayment'
import CartList from './CartList'
import "./ShoppingCart.css"
const ShoppingCart = () => {
    
    return (
        <div className="cartContainer">
            <CartList/>
            <CartPayment/>
        </div>
    )
}

export default ShoppingCart
