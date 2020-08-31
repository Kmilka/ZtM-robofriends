import { shallow } from "enzyme";
import React from "react";
import Card from "./Card.js";

it("expect to render component", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
