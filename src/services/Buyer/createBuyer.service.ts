import { IBuyerCreate } from "../../interfaces/buyer.interfaces";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Buyer } from "../../entities/buyer.entity";

async function createBuyerService({ name, email, password }: IBuyerCreate) {
  const buyerRepository = AppDataSource.getRepository(Buyer);
  const buyers = await buyerRepository.find();

  const emailRegistered = buyers.find((buyer) => buyer.email === email);

  if (emailRegistered) {
    throw new AppError(409, "Email already registered");
  }

  const newBuyer = buyerRepository.create({
    name,
    email,
    password,
  });

  await buyerRepository.save(newBuyer);
  return newBuyer;
}

export default createBuyerService;
