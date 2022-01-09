import axios from "axios";
import { React, useState, useEffect } from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const Jewelery = () => {
  const [loading, setLoading] = useState(true);
  const [jeweleryProducts, setJeweleryProducts] = useState([]);

  const getJeweleryProducts = async () => {
    try {
      const products = await axios.get("https://fakestoreapi.com/products");
      const filteredProducts = products.data.filter(
        (product) => product.category === "jewelery"
      );
      setJeweleryProducts(filteredProducts);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getJeweleryProducts();
  }, []);
  return (
    <>
      {loading ? (
        <div>
          <h2>Cargando</h2>
        </div>
      ) : (
        <>
          <ItemListContainer data={jeweleryProducts} />
        </>
      )}
    </>
  );
};

export default Jewelery;
