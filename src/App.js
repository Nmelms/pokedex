import PokemonList from "./components/PokemonList";
import Details from "./components/Details";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [view, setView] = useState("list");
  const [selectedData, setSelectedData] = useState();
  const [pokemons, setPokemons] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(selectedData);
  }, [selectedData]);

  useEffect(() => {
    if (!pokemons) {
      fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
        .then((response) => {
          const responseJson = response.json();
          return responseJson;
        })
        .then(async (data) => {
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
    }
  });

  return view === "list" ? (
    <PokemonList
      view={view}
      setView={setView}
      setSelectedData={setSelectedData}
      pokemons={pokemons}
      loading={loading}
    />
  ) : (
    <Details setView={setView} data={selectedData} />
  );
}

export default App;
