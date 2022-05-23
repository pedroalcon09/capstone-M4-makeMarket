import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { AppDataSource } from '../../data-source';
import { Seller } from '../../entities/seller.entity';
import { AppError } from '../../errors/appError';
import { ISellerLogin } from '../../interfaces';

async function sellerLoginService({ email, password }: ISellerLogin) {
  const sellerRepository = AppDataSource.getRepository(Seller);

  const sellers = await sellerRepository.find();

  const seller = sellers.find((elem) => elem.email === email);

  if (!seller) {
    throw new AppError(404, 'No seller with this email was found');
  }

  if (bcrypt.compareSync(password, seller.password)) {
    throw new AppError(401, 'Wrong email or password');
  }

  const token = jwt.sign({ email: email }, String(process.env.JWT_SECRET), {
    expiresIn: '24h',
  });

  return token;
}

export default sellerLoginService;
