import React from "react";
import Pokemon from "./Pokemon.js";
import { ReactComponent as Pokeball } from "../assets/Pokeball.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import capitalizeFirstletter from "../utils/capitalizeFirstletter.js";

export default function PokemonList({
  view,
  setView,
  setSelectedData,
  pokemons,
  loading,
}) {
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
          {loading && <h1>loading...</h1>}
          {pokemons &&
            pokemons.map((pokemon) => {
              return (
                <Pokemon
                  setView={setView}
                  data={pokemon}
                  setSelectedData={setSelectedData}
                  types={pokemon.data.types}
                  img={pokemon.data.sprites.other.dream_world.front_default}
                  key={pokemon.data.id}
                  name={capitalizeFirstletter(pokemon.name)}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
