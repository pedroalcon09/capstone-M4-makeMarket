import request from "supertest";
import { DataSource } from "typeorm";
import app from "../../app";
import { AppDataSource } from "../../data-source";

describe("Test seller paths", () => {
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

  test("Should be able to create a new seller", async () => {
    const name = "John Doe";
    const email = "johnDoe@email.com";
    const password = "Aa12@abc";

    const sellerData = {
      name,
      email,
      password,
    };

    const successResponse = await request(app).post("/seller").send(sellerData);

    expect(successResponse.status).toBe(201);
  });

  test("Should be able to login seller", async () => {
    const name = "John Doe";
    const email = "johnDoe02@email.com";
    const password = "Aa12@abc";

    const sellerData = {
      name,
      email,
      password,
    };

    const createSuccessResponse = await request(app)
      .post("/seller")
      .send(sellerData);

    const loginSellerData = {
      email,
      password,
    };

    const successResponse = await request(app)
      .post("/seller/login")
      .send(loginSellerData);

    expect(successResponse.status).toBe(201);
  });

  test("Should be able to list all sellers", async () => {
    const listSellersResponse = await request(app).get("/seller");
    expect(listSellersResponse.status).toBe(200);
  });
});
