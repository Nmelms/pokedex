import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox.js";
import { ReactComponent as Pokeball } from "../assets/Pokeball.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import { useQuery, gql } from "@apollo/client";
import { gqlQuery } from "../GraphQL/Queries.js";
export default function Pokemon() {
  const [pokemon, setPokemon] = useState(null);

  const gqlVariables = {
    limit: 151,
    offset: 0,
  };
  useEffect(() => {
    fetch("https://graphql-pokeapi.graphcdn.app/", {
      credentials: "omit",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: gqlQuery,
        variables: gqlVariables,
      }),
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => setPokemon(res.data.pokemons));
  });

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
        {pokemon && <h1>{pokemon.results[0].name}</h1>}
      </section>
    </div>
  );
}
