import axios from "axios";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetail.css";
import ItemDetailProperties from "./ItemDetailProperties/ItemDetailProperties";

const ItemDetail = ({cart,setCart}) => {
  let [loadingItem, setloadingItem] = useState(true);
  const [item, setitem] = useState();
  const { id } = useParams();

  let getProducts = async () => {
    try {
      const respuesta = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setitem(respuesta.data);
      setloadingItem(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {loadingItem ? (
        <div className="item__container-loading">
          <h2>Cargando</h2>
        </div>
      ) : (
        <>
          <h2 className="itemDetail__container-title"></h2>
          <div className="itemDetail__container-flex">
            <div className="itemDetail__container-left">
              <div
                className="itemDetail__container-left-bigPhoto"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="itemDetail__container-left-smallPhoto1"></div>
              <div className="itemDetail__container-left-smallPhoto2"></div>
            </div>
            <ItemDetailProperties item={item} cart={cart} setCart={setCart} id={id}/>
          </div>
        </>
      )}
    </>
  );
};

export default ItemDetail;
