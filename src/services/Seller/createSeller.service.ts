import { ISellerCreate } from "../../interfaces";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Seller } from "../../entities/seller.entity";

async function createSellerService(
  name: string,
  email: string,
  password: string
) {
  const sellerRepository = AppDataSource.getRepository(Seller);

  const sellers = await sellerRepository.findOne({ where: { email: email } });

  console.log(sellers, "SELLERS");

  if (sellers) {
    throw new AppError(409, "Email already registered");
  }

  const newSeller = sellerRepository.create({
    name,
    email,
    password,
  });

  console.log(newSeller, "ANTES");
  await sellerRepository.save(newSeller);

  console.log(newSeller, "DEPOIS");
  return newSeller;
}

export default createSellerService;
