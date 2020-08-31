import { shallow } from "enzyme";
import React from "react";
import CardList from "./CardList.js";

it("expect to render component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "Jonh",
      username: "jojo",
      email: "jojo@mail.com",
    },
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
