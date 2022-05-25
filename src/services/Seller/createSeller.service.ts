import { ISellerCreate } from "../../interfaces";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Seller } from "../../entities/seller.entity";

async function createSellerService({ name, email, password }: ISellerCreate) {
  const sellerRepository = AppDataSource.getRepository(Seller);

  const sellers = await sellerRepository.find();

  if (sellers) {
    throw new AppError(409, "Email already registered");
  }

  const newSeller = sellerRepository.create({
    name,
    email,
    password,
    products: [],
  });

  await sellerRepository.save(newSeller);

  return newSeller;
}

export default createSellerService;
