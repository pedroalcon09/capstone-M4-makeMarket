import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import { Buyer } from "../../entities/buyer.entity";
import { AppError } from "../../errors/appError";

async function buyerLoginService(email: string, password: string) {
  const buyerRepository = AppDataSource.getRepository(Buyer);

  const buyers = await buyerRepository.find();

  const buyer = buyers.find((elem) => elem.email === email);

  if (!buyer) {
    throw new AppError(404, "No buyer with this email was found");
  }

  if (bcrypt.compareSync(password, buyer.password)) {
    throw new AppError(401, "Wrong email or password");
  }

  const token = jwt.sign({ email: email }, String(process.env.JWT_SECRET), {
    expiresIn: "24h",
  });

  return token;
}

export default buyerLoginService;
