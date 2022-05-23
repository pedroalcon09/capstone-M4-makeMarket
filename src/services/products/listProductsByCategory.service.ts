import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Product } from "../../entities/product.entity";

const listProductsService = async (category_id: string) => {
  const productRepository = AppDataSource.getRepository(Product);

  const products = await productRepository.find();

  const productByCategory = products.find(
    (product) => product.id === category_id
  );

  if (!productByCategory) {
    throw new AppError(404, "No category with this ID");
  }

  return productByCategory;
};

export default listProductsService;
