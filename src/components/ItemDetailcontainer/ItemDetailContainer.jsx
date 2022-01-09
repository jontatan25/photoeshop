import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemDetailMobile from "../ItemDetail/ItemDetailMobile";
import "./ItemDetailContainer.css";

const ItemDetailContainer = ({cart,setCart}) => {
  return (
    <>
      <div className="itemDetail__container">
        <ItemDetail cart={cart} setCart={setCart}/>
        {/* <ItemDetailMobile datos={datos} /> */}
      </div>
      
    </>
  );
};

export default ItemDetailContainer;
