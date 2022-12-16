import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox.js";
import Pokemon from "./Pokemon.js";
import { ReactComponent as Pokeball } from "../assets/Pokeball.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBars } from "@fortawesome/free-solid-svg-icons";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => {
        const responseJson = response.json();
        return responseJson;
      })
      .then(async (data) => {
        console.log(data);
        const pokemons = data.results;
        for (const pokemon of pokemons) {
          pokemon.data = await fetch(pokemon.url).then((res) => res.json());
        }

        setPokemons(pokemons);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="pokemonList ">
      <Pokeball className="pokeball-bg" />
      <nav>
        <ul className="d-flex justify-content-between mt-5 pl-0 px-4 vw-100">
          <li>
            <button className="iconBtn hover" aria-label="back">
              <FontAwesomeIcon size="2xl" icon={faArrowLeft} />
            </button>
          </li>
          <li>
            <button className="iconBtn" aria-label="menu">
              <FontAwesomeIcon size="2xl" icon={faBars} />
            </button>
          </li>
        </ul>
      </nav>

      <h1 className="title ">PokeDex </h1>

      <div
        className="container-fluid d-flex
      justify-content-center pt-5"
      >
        <div className="pokeContainer w-100 d-flex flex-wrap row">
          {pokemons &&
            pokemons.map((pokemon) => {
              //capitalize first letter of pokemon name
              let split = pokemon.name.split("");
              let first = split[0].toUpperCase();
              split[0] = first;
              let name = split.join("");

              return (
                <Pokemon
                  types={pokemon.data.types}
                  img={pokemon.data.sprites.other.dream_world.front_default}
                  key={pokemon.data.id}
                  name={name}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
