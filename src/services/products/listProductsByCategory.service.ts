import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Product } from "../../entities/product.entity";

const listProductsByCategoryService = async (category_id: string) => {
  const productRepository = AppDataSource.getRepository(Product);

  const products = await productRepository.find({
    where: { category_id: category_id },
  });

  if (products.length === 0) {
    throw new AppError(404, "No products in this category");
  }

  return products;
};

export default listProductsByCategoryService;
