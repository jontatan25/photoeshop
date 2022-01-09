import { Route, BrowserRouter, Routes } from "react-router-dom";
import { React, useState, useEffect } from "react";
import axios from "axios";

import "./Main.css";

import Header from "../Header/Header";
import ItemDetailContainer from "../ItemDetailcontainer/ItemDetailContainer";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import Pokeapi from "../ItemListContainer/Pokeapi";
import Men from "../pages/Men";
import Women from "../pages/Women"
import Jewelery from "../pages/Jewelery";
import Electronics from "../pages/Electronics";
import ShoppingCart from "../Cart/ShoppingCart";


const Main = () => {

  const [data, setdata] = useState([]);
  const [cart, setCart] = useState([])

  const getStore = async () => {
    let urlp =
      "https://fakestoreapi.com/products";

    try {
      const respuesta = await axios.get(urlp);
      console.log(respuesta.data);
      setdata(respuesta.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStore();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ItemListContainer data={data}/>}></Route>
        <Route
          path="/item/:id"
          element={<ItemDetailContainer cart={cart} setCart={setCart}/>}
        ></Route>
        <Route
          path="/:category/item/:id"
          element={<ItemDetailContainer cart={cart} setCart={setCart}/>}
        ></Route>
        <Route path="/api" element={<Pokeapi />}></Route>
        <Route path="/men" element={<Men/>}></Route>
        <Route path="/women" element={<Women/>}></Route>
        <Route path="/jewelery" element={<Jewelery/>}></Route>
        <Route path="/electronics" element={<Electronics/>}></Route>
        <Route path="/cart" element={<ShoppingCart/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
