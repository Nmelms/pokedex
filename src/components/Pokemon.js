import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox.js";
import { ReactComponent as Pokeball } from "../assets/Pokeball.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBars } from "@fortawesome/free-solid-svg-icons";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
        console.log(data);
      });

    // fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
    //   .then((response) => {
    //     const responseJson = response.json();
    //     const data = await responseJson
    //   })
    //   .then(async (data) => {
    //     const pokemons = data.results;
    //     for (const pokemon of pokemons) {
    //       pokemon.data = await fetch(pokemon.url).then((res) => res.json());
    //       setPokemon(pokemons);
    //     }

    //     console.log(pokemons);
    //   });
  }, []);

  return (
    <div className="pokemon">
      <Pokeball className="pokeball-bg" />
      <nav>
        <ul className="d-flex justify-content-between mt-5 pl-0 px-4">
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

      <section className="m-3">
        <h1 className="title">PokeDex</h1>
        {pokemon && <p>{pokemon.results[0].name}</p>}
      </section>
    </div>
  );
}
