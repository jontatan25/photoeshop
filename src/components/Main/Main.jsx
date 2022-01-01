import { Route, BrowserRouter, Routes } from "react-router-dom";
import { React, useState, useEffect } from "react";
import axios from "axios";

import "./Main.css";

import Counter from "../Counter/Counter";
import Header from "../Header/Header";
import ItemDetailContainer from "../ItemDetailcontainer/ItemDetailContainer";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import Pokeapi from "../ItemListContainer/Pokeapi";

const Main = () => {
  const [data, setdata] = useState([]);

  const client = "563492ad6f91700001000001c3b91d98dbf844c3873f8fd31078f05d";
  
  const getPexels = async () => {
    let urlp =
      "https://api.pexels.com/v1/search?query=black+and+white&per_page=5";

    try {
      const respuesta = await axios.get(urlp, {
        headers: {
          authorization: client,
        },
      });
      console.log(respuesta.data.photos);
      setdata(respuesta.data.photos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPexels();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ItemListContainer data={data} />}></Route>
        <Route
          path="/Item"
          element={<ItemDetailContainer data={data} />}
        ></Route>
        <Route
          path="/Item/:id"
          element={<ItemDetailContainer data={data} />}
        ></Route>
        <Route path="/api" element={<Pokeapi />}></Route>

        {/* <Counter/> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
