import { rest } from "msw";

export const handlers = [
  // Handles a GET /user request

  rest.get("https://pokeapi.co/api/v2/pokemon", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: [{ name: "bulbasuar" }],
      })
    );
  }),
];
