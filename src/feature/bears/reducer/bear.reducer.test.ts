import { BearStructure } from "../models/bear";
import { bearReducer } from "./bear.reducer";
import * as ac from "./bear.actions.creater";

describe("Given the knowledge reducer", () => {
  let mockState: BearStructure[];
  let mockPayload: BearStructure;

  beforeEach(() => {
    mockState = [
      {
        name: "Test-1",
        id: 1,
        height: "400cm",
        type: "Black Bear",
        weight: "800kg",
      },
      {
        name: "Test-2",
        id: 2,
        height: "400cm",
        type: "Black Bear",
        weight: "800kg",
      },
    ];

    mockPayload = {
      name: "Test-3",
      id: 2,
      height: "400cm",
      type: "Black Bear",
      weight: "800kg",
    };
  });

  describe("When the action is empty", () => {
    test("Then, it should return the initial state", () => {
      const initialState = [] as BearStructure[];
      const action = { type: "" };
      const result = bearReducer(initialState, action);
      expect(result).toEqual([]);
    });
  });

  describe("When the action is load", () => {
    test("Then, it should return the mock state", () => {
      const result = bearReducer(mockState, ac.loadCreator);
      expect(result).toEqual(mockState);
    });
  });

  describe("When the action is creator", () => {
    test("Then, if the initial state is an empty array, it should return the array with the payload", () => {
      const result = bearReducer([], ac.addCreator(mockPayload));
      expect(result).toEqual([mockPayload]);
    });
  });

  describe("When the action is update", () => {
    test("Then, it should return the mock state", () => {
      const updated = [
        {
          name: "Test-1",
          id: 1,
          height: "400cm",
          type: "Black Bear",
          weight: "800kg",
        },
        mockPayload,
      ];
      const result = bearReducer(mockState, ac.updateCreator(mockPayload));
      expect(result).toEqual(updated);
    });
  });

  describe("When the action is delete", () => {
    test("Then, the function should been called", () => {
      const result = bearReducer(mockState, ac.deleteCreator(2));
      expect(result).toEqual([mockState[0]]);
    });
  });
});
