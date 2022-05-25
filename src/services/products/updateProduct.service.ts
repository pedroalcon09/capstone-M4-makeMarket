import { IProductsUpdate } from "../../interfaces/index";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Product } from "../../entities/product.entity";

const updateProductService = async (
  product_id: string,
  updateData: IProductsUpdate
) => {
  const productRepository = AppDataSource.getRepository(Product);

  const products = await productRepository.find();

  const productToBeUpdated = products.find(
    (product) => product.id === product_id
  );

  if (!productToBeUpdated) {
    throw new AppError(404, "No product with this id");
  }

  await productRepository.update(productToBeUpdated!.id, {
    name: updateData.name,
    price: updateData.price,
    description: updateData.description,
    stock: updateData.stock,
    url_image: updateData.url_img,
  });

  const updatedProduct = await productRepository.find({
    where: { id: product_id },
  });

  return updatedProduct;
};

export default updateProductService;
