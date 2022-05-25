import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { IBuyer } from "../../interfaces";
import { Buyer } from "../../entities/buyer.entity";

async function deleteBuyerService(id: string) {
  const buyerRepository = AppDataSource.getRepository(Buyer);

  const buyers = await buyerRepository.find();

  const buyerDelete = buyers.find((buyer) => buyer.id === id);

  if (!buyerDelete) {
    throw new AppError(404, "No buyer with this id");
  }

  await buyerRepository.delete(buyerDelete!.id);

  return buyerDelete;
}

export default deleteBuyerService;
