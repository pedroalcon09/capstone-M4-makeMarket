import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Buyer } from "../../entities/buyer.entity";

async function listBuyerByIdService(id: string) {
  const buyerRepository = AppDataSource.getRepository(Buyer);

  const buyers = await buyerRepository.find();

  const buyer = buyers.find((elem) => elem.id === id);

  if (!buyer) {
    throw new AppError(404, "No user with this id");
  }

  return buyer;
}

export default listBuyerByIdService;
