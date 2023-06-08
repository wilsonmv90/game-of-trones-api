import React from "react";

const Character = ({ personaje }) => {
  return (
    <>
      <h2 className="section__name">{personaje.firstName}</h2>
      <img className="section__img" src={personaje.imageUrl} alt="lol" />
    </>
  );
};

export default Character;