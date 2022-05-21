import { ISellerCreate } from '../../interfaces';
import { AppDataSource } from '../../data-source';
import { AppError } from '../../errors/appError';
import { Seller } from '../../entities/seller.entity';
import bcrypt from 'bcrypt';

async function createSellerService({ name, email, password }: ISellerCreate) {
  const sellerRepository = AppDataSource.getRepository(Seller);

  const sellers = await sellerRepository.find();

  const emailRegistered = sellers.find((seller) => seller.email === email);

  if (emailRegistered) {
    throw new AppError(409, 'Email already registered');
  }

  const seller = new Seller();
  seller.name = name;
  seller.email = email;
  seller.password = bcrypt.hashSync(password, 10);

  sellerRepository.create(seller);
  await sellerRepository.save(seller);

  return seller;
}

export default createSellerService;
