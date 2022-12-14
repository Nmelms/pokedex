import { typeFromAST } from "graphql";
import React, { useEffect, useState } from "react";

export default function Pokemon({ name, img, types }) {
  const [color, setColor] = useState("");

  useEffect(() => {
    if (types[0].type.name === "grass") {
      setColor("green");
    } else if (types[0].type.name === "fire") {
      setColor("red");
    } else if (types[0].type.name === "water") {
      setColor("blue");
    } else if (types[0].type.name === "ground") {
      setColor("brown");
    } else if (types[0].type.name === "bug") {
      setColor("orange");
    } else if (types[0].type.name === "psychic") {
      setColor("purple");
    } else if (
      types[0].type.name === "rock" ||
      types[0].type.name === "fighting"
    ) {
      setColor("gray");
    } else if (types[0].type.name === "electric") {
      setColor("yellow");
    } else if (types[0].type.name === "ghost") {
      setColor("black");
    } else {
      setColor("gray");
    }
  }, [types]);

  return (
    <div
      style={{ backgroundColor: color, filter: "brightness(50%)" }}
      className="col-6 d-flex pokeCard text-white"
    >
      <div className="cardStats mt-4 p-3 ">
        <h1>{name}</h1>
        {types.map((type) => {
          return <h3 className="type">{type.type.name}</h3>;
        })}
      </div>
      <img className="pokemonSprite" src={img} />
    </div>
  );
}
