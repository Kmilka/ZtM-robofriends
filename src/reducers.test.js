import {
  REQUEST_FAILED,
  REQUEST_PENDING,
  REQUEST_SUCCESS,
} from "./constants.js";

import * as actions from "./actions";

import * as reducers from "./reducers";

describe("search robots", () => {
  const initialState = {
    searchField: "",
  };
  it("should return the initial state", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual(initialState);
  });
  it("should handle the CHANGE_SEARCHFIELD action", () => {
    expect(
      reducers.searchRobots(initialState, actions.searchField("abc"))
    ).toEqual({ searchField: "abc" });
  });
});

describe("request robots", () => {
  const initialState = {
    error: "",
    isPending: false,
    robots: [],
  };
  it("should return the initial state", () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialState);
  });

  it("should handle the REQUEST_PENDING action", () => {
    expect(
      reducers.requestRobots(initialState, {
        type: REQUEST_PENDING,
      })
    ).toEqual({
      error: "",
      robots: [],
      isPending: true,
    });
  });

  it("should handle the REQUEST_SUCCESS action", () => {
    expect(
      reducers.requestRobots(initialState, {
        type: REQUEST_SUCCESS,
        payload: [
          {
            id: 123,
            name: "test",
            email: "mymail@com",
          },
        ],
      })
    ).toEqual({
      error: "",
      robots: [
        {
          id: 123,
          name: "test",
          email: "mymail@com",
        },
      ],
      isPending: false,
    });
  });

  it("should handle the REQUEST_FAILED action", () => {
    expect(
      reducers.requestRobots(initialState, {
        type: REQUEST_FAILED,
        payload: "network error",
      })
    ).toEqual({
      error: "network error",
      robots: [],
      isPending: false,
    });
  });
});
