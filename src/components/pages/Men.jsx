import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { React, useState, useEffect} from "react";
import axios from "axios";

const Men = () => {
  const [menProducts, setmenProducts] = useState([]);
  let [loading, setLoading] = useState(true);

  const getMenProducts = async () => {
    try {
      const products = await axios.get(
        "https://fakestoreapi.com/products"
      );
      const filterProducts = products.data.filter(product => product.category === "men's clothing")
      setmenProducts(filterProducts);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
      getMenProducts(); 
  }, [])

  return (
    <>
    { loading ? (
        <div>
            <h2>Cargando</h2>
      </div>)
      :
      <>
      <ItemListContainer data={menProducts} />
      </>      
    }
    </>
  );
};

export default Men;
