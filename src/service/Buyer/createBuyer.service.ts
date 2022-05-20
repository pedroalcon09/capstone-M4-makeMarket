import { IBuyerCreate } from "../../interfaces/buyer.interfaces";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Buyer } from "../../entities/buyer.entity";
import bcrypt from "bcrypt";

async function createBuyerService({ name, email, password }: IBuyerCreate) {
  const buyerRepository = AppDataSource.getRepository(Buyer);

  const buyers = await buyerRepository.find();

  const emailRegistered = buyers.find((buyer) => buyer.email === email);

  if (emailRegistered) {
    throw new AppError(409, "Email already registered");
  }

  const buyer = new Buyer();
  buyer.name = name;
  buyer.email = email;
  buyer.password = bcrypt.hashSync(password, 10);

  buyerRepository.create(buyer);
  await buyerRepository.save(buyer);

  return buyer;
}

export default createBuyerService;
