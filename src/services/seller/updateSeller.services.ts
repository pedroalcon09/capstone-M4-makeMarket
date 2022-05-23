import { AppDataSource } from '../../data-source';
import { ISellerUpdate } from '../../interfaces';
import bcrypt from 'bcrypt';
import { AppError } from '../../errors/appError';
import { Seller } from '../../entities/seller.entity';

async function updateSellerService(id: string, updateData: ISellerUpdate) {
  const sellerRepository = AppDataSource.getRepository(Seller);

  if (updateData === undefined) {
    throw new AppError(400, 'Body request empty');
  }

  const sellers = await sellerRepository.find();

  const sellerUpdate = sellers.find((seller) => seller.id === id);

  if (!sellerUpdate) {
    throw new AppError(404, 'No Seller with this id');
  }

  const newPass = updateData.password;

  if (newPass) {
    if (bcrypt.compareSync(newPass, sellerUpdate!.password)) {
      throw new AppError(
        409,
        'Password must be different from the current one'
      );
    }
    const updated = { ...sellerUpdate, ...updateData };

    const hashedPassword = bcrypt.hashSync(newPass, 10);

    await sellerRepository.update(updated!.id, {
      name: updated.name,
      email: updated.email,
      password: hashedPassword,
      updated_at: new Date(),
    });

    return updated;
  }

  const updated = { ...sellerUpdate, ...updateData };

  await sellerRepository.update(updated!.id, {
    name: updated.name,
    email: updated.email,
    updated_at: new Date(),
  });

  return updated;
}

export default updateSellerService;
