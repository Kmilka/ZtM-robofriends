import { shallow } from "enzyme";
import React from "react";
import MainPage from "../Components/MainPage.js";

describe("MainPage tests", () => {
  let wrapper;
  beforeEach(() => {
    const mockProps = {
      onRequestRobots: jest.fn(),
      searchField: "",
      isPending: false,
      robots: [],
      error: "",
    };
    wrapper = shallow(<MainPage {...mockProps} />);
  });

  it("expect to render MainPage", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("filters robots correctly", () => {
    expect(wrapper.instance().filterRobots()).toEqual([]);
    const mockPropsToFilter = {
      onRequestRobots: jest.fn(),
      searchField: "a",
      isPending: false,
      robots: [
        {
          id: 3,
          name: "john",
          email: "mymail@com",
        },
        {
          id: 4,
          name: "melody",
          email: "mamamia@melody.net",
        },
        {
          id: 1,
          name: "ana",
          email: "ananas@tata.ru",
        },
      ],
    };
    expect(
      shallow(<MainPage {...mockPropsToFilter} />)
        .instance()
        .filterRobots()
    ).toEqual([
      {
        id: 1,
        name: "ana",
        email: "ananas@tata.ru",
      },
    ]);

    const mockPropsNotToFilter = {
      onRequestRobots: jest.fn(),
      searchField: "dummy",
      isPending: false,
      robots: [
        {
          id: 3,
          name: "john",
          email: "mymail@com",
        },
        {
          id: 4,
          name: "melody",
          email: "mamamia@melody.net",
        },
        {
          id: 1,
          name: "ana",
          email: "ananas@tata.ru",
        },
      ],
    };
    expect(
      shallow(<MainPage {...mockPropsNotToFilter} />)
        .instance()
        .filterRobots()
    ).toEqual([]);
  });

  it("renders correct pending-dependent component", () => {
    const mockPropsPendingTrue = {
      onRequestRobots: jest.fn(),
      searchField: "",
      isPending: true,
      robots: [],
      error: "",
    };
    expect(
      shallow(<MainPage {...mockPropsPendingTrue} />).contains(<h1>Loading</h1>)
    ).toEqual(true);
  });
});
