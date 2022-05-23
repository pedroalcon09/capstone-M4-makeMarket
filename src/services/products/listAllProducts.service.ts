import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Product } from "../../entities/product.entity";

const listProductsService = async () => {
  const productRepository = AppDataSource.getRepository(Product);

  const products = await productRepository.find();

  if (products.length === 0) {
    throw new AppError(404, "No products registered");
  }

  return products;
};

export default listProductsService;
