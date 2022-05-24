import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Buyer } from "../../entities/buyer.entity";
import { Product } from "../../entities/product.entity";
import { Buys } from "../../entities/buys.entity";

async function FavoriteProductService(buyerID: string, productId: string) {
  const buyerRepository = AppDataSource.getRepository(Buyer);
  const productRepository = AppDataSource.getRepository(Product);
  const buysRepository = AppDataSource.getRepository(Buys);

  const buyers = await buyerRepository.find();
  const products = await productRepository.find();
  const buys = await productRepository.find();

  const buyer = buyers.find((elem) => elem.id === id);
  
  if (!buyer) {
    throw new AppError(404, "No user with this id");
  }
  
  const product = products.find((elem) => elem.id === id);
  if (!product) {
    throw new AppError(404, "No product with this id");
  }
  
}
export default FavoriteProductService;
