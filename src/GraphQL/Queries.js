import { gql } from "@apollo/client";

export const gqlQuery = `query samplePokeAPIquery {
  pokemons(limit: 151, offset: 0) {
    results {
      id
      name
      artwork
      url
    }
  }
}
`;
