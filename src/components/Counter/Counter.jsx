import {React,useState} from 'react'
import './Counter.css';
import {CgMathPlus} from 'react-icons/cg'
import {CgMathMinus} from 'react-icons/cg'

const Counter = ({quantity,setQuantity}) => {

    let plusOne = () =>{
        if (quantity.amount<quantity.stock) {
            setQuantity({...quantity,amount:quantity.amount+1})
        }
    }
    let minusOne = () =>{
        if (quantity.amount>1) {
            setQuantity({...quantity,amount:quantity.amount-1})
        } 
    }

    return (
        <div className="counter__container">
            <button onClick={minusOne} className="counter__container-button"><CgMathMinus/></button>
            <span>{quantity.amount}</span>
            <button onClick={plusOne} className="counter__container-button"><CgMathPlus/></button> 
        </div>
    )
}

export default Counter
