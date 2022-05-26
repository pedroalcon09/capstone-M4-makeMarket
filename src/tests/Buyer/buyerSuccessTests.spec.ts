import request from "supertest";
import { DataSource } from "typeorm";
import app from "../../app";
import { AppDataSource } from "../../data-source";

describe("Test buyer paths", () => {
  let connection: DataSource;
  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((err) => {
        console.log("Error on initialization");
      });
  });
  afterAll(async () => {
    await connection.destroy();
  });

  test("Should be able to create new buyer", async () => {
    const name = "Pedro Alcon";
    const email = "pedro@teste.com";
    const password = "12Aa@bbb";
    const buyerData = { name, email, password };
    const successResponse = await request(app).post("/buyer/").send(buyerData);

    expect(successResponse.status).toBe(201);
  });

  test("Should be able to login into buyer account", async () => {
    const email = "pedro@teste.com";
    const password = "12Aa@bbb";
    const buyerData = { email, password };
    const successResponse = await request(app)
      .post("/buyer/login")
      .send(buyerData);

    expect(successResponse.text).toContain("Logged in!");
  });
});
