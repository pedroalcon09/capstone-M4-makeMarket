import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Seller } from "../../entities/seller.entity";

async function listSellerService() {
  const sellerRepository = AppDataSource.getRepository(Seller);

  const sellers = await sellerRepository.find();

  if (sellers.length === 0) {
    throw new AppError(404, "No Sellers registered");
  }

  return sellers;
}

export default listSellerService;
