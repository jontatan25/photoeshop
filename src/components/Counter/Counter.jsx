import {React,useState} from 'react'
import './Counter.css';
import {CgMathPlus} from 'react-icons/cg'
import {CgMathMinus} from 'react-icons/cg'

const Counter = () => {

    const [qty, setQty] = useState({
        stock: 10,
        amount: 0,
    })

    let plusOne = () =>{
        if (qty.amount<qty.stock) {
            setQty({...qty,amount:qty.amount+1})
        }
    }
    let minusOne = () =>{
        if (qty.amount>0) {
            setQty({...qty,amount:qty.amount-1})
        } 
    }

    return (
        <div className="counter__container">
            <button onClick={minusOne} className="counter__container-button"><CgMathMinus/></button>
            <span>{qty.amount}</span>
            <button onClick={plusOne} className="counter__container-button"><CgMathPlus/></button>
            
        </div>
    )
}

export default Counter
