import axios from "axios";
import React, { useEffect, useState } from "react";


const Pokeapi = () => {
  const client = "563492ad6f91700001000001c3b91d98dbf844c3873f8fd31078f05d";
  const [pokedex, setpokedex] = useState([]);

  const getPexels = async () => {
    let urlp = "https://api.pexels.com/v1/search?query=black+and+white&per_page=5";

    try {
      const respuesta = await axios.get(urlp, {
        headers: {
          authorization: client,
        },
      });
      console.log(respuesta.data.photos);
      setpokedex(respuesta.data.photos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPexels();
  }, []);
  return (
    <div>{pokedex && pokedex.map((u) => <div key={u.id}><img src={u.src.portrait} width='200px' alt="" /></div >)}</div>
  );

  // const [pokedex, setpokedex] = useState([])
  // const getPoke = async () =>{

  //     let url = 'https://pokeapi.co/api/v2/pokemon?limit=10'

  //         try{
  //             const respuesta = await axios.get(url)
  //             console.log (respuesta.data.results)
  //             setpokedex(respuesta.data.results)
  //         } catch (error){
  //             console.log(error)
  //             }
  // }

  // useEffect(() => {
  //     getPoke()
  // },[])
  // return (
  //     <div>
  //         {pokedex && pokedex.map((u=> (<h1 key={u.id}>{u.name}</h1>)))}
  //     </div>
  // )
};

export default Pokeapi;
