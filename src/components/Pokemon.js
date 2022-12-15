import { typeFromAST } from "graphql";
import React, { useEffect, useState } from "react";
import { ReactComponent as Pokeball } from "../assets/Pokeball.svg";

export default function Pokemon({ name, img, types }) {
  const [color, setColor] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");

  useEffect(() => {
    if (types[0].type.name === "grass") {
      setColor("#74CB48");
    } else if (types[0].type.name === "fire") {
      setColor("#F57D31");
    } else if (types[0].type.name === "water") {
      setColor("#6493EB");
    } else if (types[0].type.name === "bug") {
      setColor("#A7B723");
    } else if (types[0].type.name === "psychic") {
      setColor("#FB5584");
    } else if (types[0].type.name === "electric") {
      setColor("#F9CF30");
    } else if (types[0].type.name === "rock") {
      setColor("#B69E31");
    } else if (types[0].type.name === "ghost") {
      setColor("#70559B");
    } else if (types[0].type.name === "steel") {
      setColor("#B7B9D0");
    } else if (types[0].type.name === "ice") {
      setColor("#9AD6DF");
    } else if (types[0].type.name === "normal") {
      setColor("#AAA67F");
    } else if (types[0].type.name === "fighting") {
      setColor("#C12239");
    } else if (types[0].type.name === "flying") {
      setColor("#A891EC");
    } else if (types[0].type.name === "poison") {
      setColor("#A43E9E");
    } else if (types[0].type.name === "ground") {
      setColor("#DEC16B");
    } else if (types[0].type.name === "fairy") {
      setColor("#E69EAC");
    } else if (types[0].type.name === "dragon") {
      setColor("#7037FF");
    }
  }, [types]);

  return (
    <div className="col-6 col-sm-4 col-md-3 col-lg-2 p-1">
      <div
        style={{ backgroundColor: color }}
        className="d-flex pokeCard text-white "
      >
        <div className="cardStats mt-2 ps-2 pt-2">
          <h1>{name}</h1>
          {types.map((type) => {
            return <h3 className="type px-2 py-1">{type.type.name}</h3>;
          })}
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <img className="pokemonSprite" src={img} />
          <Pokeball class="listBall" />
        </div>
      </div>
    </div>
  );
}
