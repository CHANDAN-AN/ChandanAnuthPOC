// Loads Supertest and the Express application.
const request = require("supertest");
const app = require("../server/server");

// Tests the GET /foods endpoint.
test("GET /foods returns all food items", async () => {
    const response = await request(app).get("/foods");

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(5);
});

// Tests the 404 response for an unknown endpoint.
test("Unknown endpoint returns 404", async () => {
    const response = await request(app).get("/unknown");

    expect(response.statusCode).toBe(404);
});