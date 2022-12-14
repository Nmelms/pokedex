import PokemonList from "./components/PokemonList";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import "./App.css";
import { onError } from "@apollo/client/link/error";

function App() {
  return <PokemonList />;
}

export default App;
