import Pokemon from "./components/Pokemon";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import "./App.css";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlErrors, networdError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://graphql-pokeapi.graphcdn.app/" }),
]);
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Pokemon />
    </ApolloProvider>
  );
}

export default App;
