import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Buyer } from "../../entities/buyer.entity";

async function listBuyersService() {
  const buyerRepository = AppDataSource.getRepository(Buyer);

  const buyers = await buyerRepository.find();

  if (buyers.length === 0) {
    throw new AppError(404, "No buyers registered");
  }

  return buyers;
}

export default listBuyersService;
