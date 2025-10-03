const request = require("supertest");
const app = require("../src/server");

describe("Todo API", () => {
  it("should return health check", async () => {
    const res = await request(app).get("/healthz");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: "ok", commit: null });
  });

  it("should create a todo", async () => {
    const res = await request(app)
      .post("/api/v1/todos")
      .send({ title: "first" });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.title).toBe("first");
  });

  it("should list todos", async () => {
    const res = await request(app).get("/api/v1/todos");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});