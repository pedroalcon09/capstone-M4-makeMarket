import { AppDataSource } from '../../data-source';
import { AppError } from '../../errors/appError';
import { Seller } from '../../entities/seller.entity';

async function deleteSellerService(id: string) {
  const sellerRepository = AppDataSource.getRepository(Seller);

  const sellers = await sellerRepository.find();

  const sellerDelete = sellers.find((buyer) => buyer.id === id);

  if (!sellerDelete) {
    throw new AppError(404, 'No seller with this id');
  }

  await sellerRepository.delete(sellerDelete!.id);

  return true;
}

export default deleteSellerService;
