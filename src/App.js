import PokemonList from "./components/PokemonList";
import Details from "./components/Details";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [view, setView] = useState("list");
  const [selectedData, setSelectedData] = useState();

  useEffect(() => {
    console.log(selectedData);
  }, [selectedData]);
  return view === "list" ? (
    <PokemonList
      view={view}
      setView={setView}
      setSelectedData={setSelectedData}
    />
  ) : (
    <Details data={selectedData} />
  );
}

export default App;
