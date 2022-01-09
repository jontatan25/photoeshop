import axios from "axios";
import { React, useState, useEffect } from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer";


const Electronics = () => {
  const [loading, setLoading] = useState(true);
  const [electronicProducts, setElectronicProducts] = useState([]);

  const getElectronicProducts = async () => {
    try {
      const products = await axios.get("https://fakestoreapi.com/products");
      const filteredProducts = products.data.filter(
        (product) => product.category === "electronics"
      );
      setElectronicProducts(filteredProducts);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
      getElectronicProducts()
  }, [])
  return (
    <>
      {loading ? (
        <div>
          <h2>Loading Electronics</h2>
        </div>
      ) : (
        <>
        <ItemListContainer data={electronicProducts}></ItemListContainer>
        </>
      )}
    </>
  );
};

export default Electronics;
