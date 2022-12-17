import React, { useEffect, useState } from "react";
import { ReactComponent as Pokeball } from "../assets/Pokeball.svg";
import returnColor from "../utils/returnColor";

export default function Pokemon({
  name,
  img,
  types,
  setSelectedData,
  data,
  setView,
}) {
  const handleClick = () => {
    setSelectedData(data);
    setView("details");
  };

  return (
    <div className="col-6 col-sm-4 col-md-3 col-lg-2 p-2">
      <div
        onClick={() => handleClick()}
        style={{ backgroundColor: returnColor(types[0].type.name) }}
        className="d-flex pokeCard text-white "
      >
        <div className="cardStats mt-2 ps-2 pt-2">
          <h1>{name}</h1>
          {types.map((type, index) => {
            return (
              <h3 key={index} className="type px-2 py-1">
                {type.type.name}
              </h3>
            );
          })}
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <img loading="lazy" className="pokemonSprite" src={img} />
          <Pokeball className="listBall" />
        </div>
      </div>
    </div>
  );
}
