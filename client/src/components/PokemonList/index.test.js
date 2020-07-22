import React from "react";
import { render, findAllByTestId } from "@testing-library/react";
import PokemonList from ".";

import { MockedProvider } from "@apollo/react-testing";
import { general } from "../mocks/PokemonListMock";
import "@testing-library/jest-dom";

describe("Testing the Pokemon List", () => {
  const { container } = render(
    <MockedProvider mocks={general} addTypename={false}>
      <PokemonList />
    </MockedProvider>
  );
  it("The Pokemon List renders the correct amount of elements", async () => {
    const pk = await findAllByTestId(container, "pokemon-card-container");
    expect(pk).toHaveLength(general[0].result.data.pokemons.length);
  });
});
