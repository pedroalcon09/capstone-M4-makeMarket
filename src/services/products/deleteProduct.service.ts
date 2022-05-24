import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Product } from "../../entities/product.entity";

const deleteProductService = async (id: string) => {
  const productRepository = AppDataSource.getRepository(Product);

  const products = await productRepository.find();

  const productDelete = products.find((product) => product.id === id);

  if (!productDelete) {
    throw new AppError(404, "No product with this id");
  }

  await productRepository.delete(productDelete!.id);

  return true;
};

export default deleteProductService;
