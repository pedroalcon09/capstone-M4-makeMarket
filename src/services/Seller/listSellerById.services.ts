import { AppDataSource } from '../../data-source';
import { AppError } from '../../errors/appError';
import { Seller } from '../../entities/seller.entity';

async function listSellerByIdService(id: string) {
  const sellerRepository = AppDataSource.getRepository(Seller);

  const sellers = await sellerRepository.find();

  const seller = sellers.find((elem) => elem.id === id);

  if (!seller) {
    throw new AppError(404, 'No sellers with this id');
  }

  return seller;
}

export default listSellerByIdService;
