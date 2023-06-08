import { useEffect, useState } from "react";
import axios from "axios";
import Character from "./Character";

import "../styles/styles.css";

const GameTrones = () => {
  const [personajes, setPersonajes] = useState([]);

  const getPersonajes = async () => {
    const BASEURL = "https://thronesapi.com/api/v2/Characters";
    try {
      const res = await axios.get(BASEURL);
      setPersonajes(res.data);
      console.log("res", res.data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getPersonajes(setPersonajes);
  }, []);

  return (
    <>
      <section className="section">
        <header className="section__title"> 
          <h1>Actores Game Of Trones</h1>
        </header>
        <div className="row ">
          {personajes.map((personaje) => (
            <div key={personaje.id} className="section__card col-sm-12 col-md-6 col-lg-4 ">
              <Character personaje={personaje} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default GameTrones;