// import request from "supertest";
// import { DataSource } from "typeorm";
// import app from "../../app";
// import { AppDataSource } from "../../data-source";

// describe("Test buyer paths for success", () => {
//   let connection: DataSource;
//   beforeAll(async () => {
//     await AppDataSource.initialize()
//       .then((res) => {
//         connection = res;
//       })
//       .catch((err) => {
//         console.log("Error on initialization");
//       });
//   });
//   afterAll(async () => {
//     await connection.destroy();
//   });

//   test("Should be able to create new buyer", async () => {
//     const name = "Pedro Alcon";
//     const email = "pedro@teste.com";
//     const password = "12Aa@bbb";
//     const buyerData = { name, email, password };
//     const successResponse = await request(app).post("/buyer/").send(buyerData);

//     expect(successResponse.status).toBe(201);
//   });

//   test("Should be able to login into buyer account", async () => {
//     const email = "pedro@teste.com";
//     const password = "12Aa@bbb";
//     const buyerData = { email, password };
//     const successResponse = await request(app)
//       .post("/buyer/login")
//       .send(buyerData);

//     expect(successResponse.text).toContain("Logged in!");
//   });

//   test("Should be able to list buyers", async () => {
//     const successResponse = await request(app).get("/buyer/");

//     expect(JSON.parse(successResponse.text)).toHaveProperty("buyers");
//     expect(JSON.parse(successResponse.text).buyers.length).toBeGreaterThan(0);
//   });

//   test("Should be able to list one buyer by id", async () => {
//     const email = "pedro@teste.com";
//     const password = "12Aa@bbb";
//     const buyerData = { email, password };
//     const successLogin = await request(app)
//       .post("/buyer/login")
//       .send(buyerData);

//     const token = JSON.parse(successLogin.text).token;

//     const successList = await request(app)
//       .get("/buyer/")
//       .set("Authorization", token);

//     expect(JSON.parse(successList.text).buyers.length).toBeGreaterThan(0);
//   });

//   test("Should be able to update buyer", async () => {});

//   test("Should be able to delete one buyer", async () => {});
// });
