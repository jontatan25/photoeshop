import { useState, React } from "react";
import "./ItemDetailProperties.css";
import Counter from "../../Counter/Counter";
import AddToCart from "../AddToCart";

const ItemDetailProperties = ({ item, cart, setCart, id }) => {
  const [quantity, setQuantity] = useState({
    stock: 10,
    amount: 1,
  });

  return (
    <div className="itemDetail__container-right">
      <div className="itemDetail__container-right-title">
        <p>{item.title}</p>
      </div>
      <div className="itemDetail__container-right-properties">
        <p className="itemDetail__container-right-properties-price">
          ${item.price} USD
        </p>
        <p className="itemDetail__container-right-properties-subtitle">
          {item.description}
        </p>
        <p className="itemDetail__container-right-properties-option">Option</p>
        <Counter quantity={quantity} setQuantity={setQuantity} />
        <AddToCart
          item={item}
          quantity={quantity}
          setQuantity={setQuantity}
          cart={cart}
          setCart={setCart}
          id={id}
        />
      </div>
    </div>
  );
};

export default ItemDetailProperties;
