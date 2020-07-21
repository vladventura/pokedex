import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

import "@testing-library/jest-dom";

import { singleType } from "../mocks/PokemonMock";
import Pokemon from ".";

configure({ adapter: new Adapter() });

describe("Testing the Pokemon component", () => {
  const wrapper = shallow(<Pokemon {...singleType} />, {
    suspenseFallback: true,
  });
  test("The image is on the component (or rather, on the lazy loader)", () => {
    const image = wrapper.find({ "data-testid": "pokemon-img" });
    expect(image).toHaveLength(1);
  });
  test("The Pokemon name is present", () => {
    const name = wrapper.find({ "data-testid": "pokemon-name" }).text();
    expect(name).toBe(singleType.name);
  });
  test("The Pokemon description is present", () => {
    const description = wrapper
      .find({ "data-testid": "pokemon-description" })
      .text();
    expect(description).toBe(singleType.description);
  });
});
