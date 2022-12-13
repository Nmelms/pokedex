import { rest } from "msw";

export const handlers = [
  // Handles a GET /user request

  rest.post("https://graphql-pokeapi.graphcdn.app/", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: {
          pokemons: {
            results: [{ name: "bulbasuar" }],
          },
        },
      })
    );
  }),
];
