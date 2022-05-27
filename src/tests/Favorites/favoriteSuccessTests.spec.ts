import request from "supertest";
import { DataSource } from "typeorm";
import app from "../../app";
import { AppDataSource } from "../../data-source";

describe("Test buyer paths for success", () => {
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

  test("Should be able to add a favourite", async () => {

    const nameBuyer = "Teste comprador";
    const emailBuyer = "comprador16@teste.com";
    const passwordBuyer = "12Aa@bbb";
    const buyerData = { name: nameBuyer, email: emailBuyer, password: passwordBuyer };
    const successCreatedBuyer = await request(app).post("/buyer/").send(buyerData);
    const buyerId = JSON.parse(successCreatedBuyer.text).buyer.id
    const buyerLoginData = { email: emailBuyer, password: passwordBuyer}
    const successLoginBuyer = await request(app).post("/buyer/login").send(buyerLoginData)
    const buyerToken = JSON.parse(successLoginBuyer.text).token
    
    const nameSeller = "Teste vendedor";
    const emailSeller = "vendedor18@teste.com";
    const passwordSeller = "12Aa@bbb";
    const sellerData = { name: nameSeller, email: emailSeller, password: passwordSeller };
    const successCreatedSeller = await request(app).post("/seller/").send(sellerData);
    const sellerId = JSON.parse(successCreatedSeller.text).seller.id
    const sellerLoginData = { email: emailSeller, password: passwordSeller}
    const successLoginSeller = await request(app).post("/seller/login").send(sellerLoginData)
    const sellerToken = JSON.parse(successLoginSeller.text).token

    const nameProduct = "Celular 9"
    const price = 1500.00
    const description = "Celular preto"
    const stock = 155
    const url_img = "https://superprix.vteximg.com.br/arquivos/ids/189851-600-600/51730.jpg?v=637320578840930000"
    const category_id = "58cbdc0e-751f-4ef7-b4e4-c12be577ece7"
    const productData = { name: nameProduct, price, description, stock, url_img, category_id }
    const successCreatedProduct = await request(app)
    .post(`/products/${sellerId}`)
    .send(productData)
    .set("Authorization", sellerToken)
    const productId = JSON.parse(successCreatedProduct.text).newProduct.id

    const successAddFavourite = await request(app)
    .post(`/buyer/${buyerId}/favourite/${productId}`)
    .set("Authorization", buyerToken);

    expect(successAddFavourite.status).toBe(201);
  });

  test("Should be able to list one buyer by id", async () => {
    
    const email = "comprador13@teste.com";
    const password = "12Aa@bbb";

    const loginData = { email, password };
    const successLogin = await request(app).post("/buyer/login").send(loginData);
    const token = JSON.parse(successLogin.text).token;

    const successList = await request(app)
      .get("/buyer/b20f3e74-3d9e-41cb-a730-81244cc42c00")
      .set("Authorization", token);
      expect(successList.status).toBe(200);
  });
});

