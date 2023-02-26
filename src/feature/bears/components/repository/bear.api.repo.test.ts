import { BearStructure } from "../../models/bear";
import { BearApiRepo } from "./bear.api.repo";

global.fetch = jest.fn().mockResolvedValue({});

const mockChar: BearStructure = {
  name: "Test-1",
  id: 1,
  height: "300cm",
  type: "Brown Bear",
  weight: "1000kg",
};

const mockChar1: BearStructure = {
  name: "Test-3",
  id: 2,
  height: "400cm",
  type: "Black Bear",
  weight: "800kg",
};

describe("Given a new private repo", () => {
  let repo1: BearApiRepo;
  beforeEach(() => {
    repo1 = new BearApiRepo();
  });
  describe("When is instanced", () => {
    test("then it should load the data from the api", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue([]),
      });
      const resp = await repo1.load();
      expect(fetch).toHaveBeenCalled();
      expect(resp).toEqual([]);
    });
    test("then it should get and specified card", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockChar),
      });
      const resp = await repo1.loadId(1);
      expect(fetch).toHaveBeenCalled();
      expect(resp).toEqual(mockChar);
    });
    test("then it create a card", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue({
          name: "Test-1",
          id: 1,
          height: "300cm",
          type: "Brown Bear",
          weight: "1000kg",
        }),
      });
      const resp = await repo1.add({
        name: "Test-1",
        height: "300cm",
        type: "Brown Bear",
        weight: "1000kg",
      });
      expect(fetch).toHaveBeenCalled();
      expect(resp).toEqual(mockChar);
    });
    test("then it should modify the card", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue({
          name: "Test-3",
          id: 2,
          height: "400cm",
          type: "Black Bear",
          weight: "800kg",
        }),
      });
      const resp = await repo1.update({
        name: "Test-3",
        height: "400cm",
        type: "Black Bear",
        weight: "800kg",
      });
      expect(fetch).toHaveBeenCalled();
      expect(resp).toEqual(mockChar1);
    });
    test("then it should delete my card", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue({
          name: "Test-1",
          id: 1,
          height: "300cm",
          type: "Brown Bear",
          weight: "1000kg",
        }),
      });
      const resp = await repo1.delete(0);
      expect(fetch).toHaveBeenCalled();
      expect(resp).toBe(void 0);
    });
  });
});
