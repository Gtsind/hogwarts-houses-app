const request = require("supertest");
const app = require("./app");
const { findHouse, sendAllHouses } = require("./functions/houses.functions.js");

describe("Unit tests for house functions", () => {
  test("findHouse returns correct matches", () => {
    const result = findHouse("ff");
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(
      result.some((h) => h.name === "Gryffindor" || h.name === "Hufflepuff")
    ).toBe(true);
  });

  test("findHouse returns default message if nothing matches", () => {
    const result = findHouse("xyz");
    expect(result).toBe("Could not find any houses.");
  });

  test("sendAllHouses returns all houses", () => {
    const result = sendAllHouses();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(4);
  });
});

describe("Integration tests for /houses route", () => {
  test("GET /houses returns all houses when no query param is used", async () => {
    const res = await request(app).get("/houses");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.reply)).toBe(true);
    expect(res.body.reply.length).toBe(4);
  });

  test("GET /houses?name=ff returns filtered results", async () => {
    const res = await request(app).get("/houses?name=ff");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.reply)).toBe(true);
    expect(res.body.reply.length).toBeGreaterThan(0);
    expect(
      res.body.reply.some(
        (h) => h.name === "Gryffindor" || h.name === "Hufflepuff"
      )
    ).toBe(true);
  });

  test("GET /houses?name=xyz returns default response", async () => {
    const res = await request(app).get("/houses?name=xyz");
    expect(res.statusCode).toBe(200);
    expect(res.body.reply).toBe("Could not find any houses.");
  });
});
