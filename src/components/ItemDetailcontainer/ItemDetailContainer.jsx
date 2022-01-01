import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemDetailMobile from "../ItemDetail/ItemDetailMobile";
import "./ItemDetailContainer.css";

const ItemDetailContainer = ({ data }) => {
  return (
    <>
      <div className="itemDetail__container">
        <ItemDetail data={data}/>
        {/* <ItemDetailMobile datos={datos} /> */}
      </div>
      
    </>
  );
};

export default ItemDetailContainer;
