import { rest } from "msw";

export const handlers = [
  // Handles a GET /user request

  rest.get("https://pokeapi.co/api/v2/pokemon/", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: [
          {
            name: "bulbsaur",
            url: "www.nick.com",
          },
        ],
      })
    );
  }),

  rest.get("www.nick.com", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        sprites: {
          other: {
            dream_world: {
              font_default: "url",
            },
          },
        },
        types: [
          {
            type: {
              name: "grass",
            },
          },
        ],
      })
    );
  }),
];
