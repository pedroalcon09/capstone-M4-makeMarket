import request from "supertest";
import { DataSource } from "typeorm";
import app from "../../app";
import { AppDataSource } from "../../data-source";

describe("Test buyer paths for fails", () => {
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

  test("Should not be able to list buyers", async () => {
    const successResponse = await request(app).get("/buyer/");

    expect(successResponse.status).toEqual(404);
    expect(JSON.parse(successResponse.text).message).toEqual(
      "No buyers registered"
    );
  });

  test("Should not be able to create new buyer with same name", async () => {
    const name = "Pedro Alcon";
    const email = "pedro@teste.com";
    const password = "12Aa@bbb";
    const buyerData = { name, email, password };
    const successResponse = await request(app).post("/buyer/").send(buyerData);

    expect(successResponse.status).toBe(201);

    const errorResponse = await request(app).post("/buyer/").send(buyerData);

    expect(errorResponse.status).toBe(409);
    expect(JSON.parse(errorResponse.text).message).toEqual(
      "Email already registered"
    );
  });

  test("Should not be able to create new buyer without name", async () => {
    const name = "";
    const email = "noname@teste.com";
    const password = "12Aa@bbb";
    const buyerData = { name, email, password };
    const errorResponse = await request(app).post("/buyer/").send(buyerData);

    expect(errorResponse.status).toBe(400);
    expect(JSON.parse(errorResponse.text).message).toEqual("Name needed!");
  });

  test("Should not be able to create new buyer without email", async () => {
    const name = "No name";
    const email = "";
    const password = "12Aa@bbb";
    const buyerData = { name, email, password };
    const errorResponse = await request(app).post("/buyer/").send(buyerData);

    expect(errorResponse.status).toBe(400);
    expect(JSON.parse(errorResponse.text).message).toEqual("Email needed");
  });

  test("Should not be able to login into buyer account with wrong password or email", async () => {
    const email = "pedro@teste.com";
    const password = "12Aa@bbbc";
    const buyerData = { email, password };
    const errorResponse = await request(app)
      .post("/buyer/login")
      .send(buyerData);

    expect(errorResponse.status).toEqual(401);
    expect(JSON.parse(errorResponse.text).message).toEqual(
      "Wrong email or password"
    );
  });

  test("Should not be able to login into buyer account without email", async () => {
    const email = "";
    const password = "12Aa@bbbc";
    const buyerData = { email, password };
    const errorResponse = await request(app)
      .post("/buyer/login")
      .send(buyerData);

    expect(errorResponse.status).toEqual(400);
    expect(JSON.parse(errorResponse.text).message).toEqual("Email needed");
  });

  test("Should not be able to login into buyer account without password", async () => {
    const email = "Pedro@teste.com";
    const password = "";
    const buyerData = { email, password };
    const errorResponse = await request(app)
      .post("/buyer/login")
      .send(buyerData);

    expect(errorResponse.status).toEqual(400);
    expect(JSON.parse(errorResponse.text).message).toEqual("Password needed");
  });

  test("Should not be able to list one buyer by id", async () => {});

  test("Should not be able to update buyer", async () => {});

  test("Should not be able to delete one buyer", async () => {});
});
