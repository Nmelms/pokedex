import React, { useEffect, useState } from "react";
import Pokemon from "./Pokemon.js";
import { ReactComponent as Pokeball } from "../assets/Pokeball.svg";
import capitalizeFirstletter from "../utils/capitalizeFirstletter.js";

export default function PokemonList({
  view,
  setView,
  setSelectedData,
  pokemons,
  loading,
}) {
  const [filtered, setFiltered] = useState(pokemons);
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (pokemons) {
      const result = pokemons.filter((pokemon) =>
        pokemon.name.startsWith(search)
      );
      setFiltered(result);
    }
  }, [search, pokemons]);
  return (
    <div className="pokemonList">
      <Pokeball className="pokeball-bg" />
      <div className="d-flex flex-column col-12 align-items-center">
        <h1 className="title co-12 ">PokeDex </h1>
        <input
          onChange={(e) => handleInputChange(e)}
          value={search}
          className="col-8 col-lg-4 mt-4"
          type="text"
          placeholder="Search For A Pokemon"
        />
      </div>

      <div
        className="container-fluid d-flex
      justify-content-center pt-5"
      >
        <div className="pokeContainer w-100 d-flex flex-wrap row">
          {loading && <h1>loading...</h1>}
          {filtered &&
            filtered.map((pokemon) => {
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
