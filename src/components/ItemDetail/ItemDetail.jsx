import axios from "axios";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetail.css";
import ItemDetailProperties from "./ItemDetailProperties/ItemDetailProperties";

const ItemDetail = ({ data }) => {
  const [item, setitem] = useState([]);
  const { id } = useParams();

  let getProducts = async () => {
    try {
      const respuesta = await axios.get(
        `https://api.pexels.com/v1/photos/${id}`,
        {
          headers: {
            authorization:
              "563492ad6f91700001000001c3b91d98dbf844c3873f8fd31078f05d",
          },
        }
      );
      setitem(respuesta.data);
      console.log(respuesta.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
    
      <h2 className="itemDetail__container-title"></h2>
      <div className="itemDetail__container-flex">
        <div className="itemDetail__container-left">
          <div className="itemDetail__container-left-bigPhoto">
            {console.log(item)}
          </div>

          <div className="itemDetail__container-left-smallPhoto1"></div>
          <div className="itemDetail__container-left-smallPhoto2"></div>
        </div>
        <ItemDetailProperties data={data} />
      </div>
    </>
  );
};

export default ItemDetail;
