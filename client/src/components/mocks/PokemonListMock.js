import { singleType } from "./PokemonMock";
import { GENERAL_QUERY } from "../PokemonList";
export const general = [
  {
    request: {
      query: GENERAL_QUERY,
      variables: {},
    },
    result: {
      data: {
        pokemons: [
          {
            id: 1,
            name: "Jolteon",
            description: "I AM SPEED",
            type1: "electric",
            type2: "",
          },
        ],
      },
    },
  },
];
