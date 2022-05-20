import IProductsCreate from "../../interfaces/index.ts";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Product } from "../../entities/product.entity";

const createProductService = async ({
  name,
  price,
  description,
  stock,
  url_img,
  category_id,
}: IProductsCreate) => {
  const productRepository = AppDataSource.getRepository(Product);

  const product = new Product();
  product.name = name;
  product.price = price;
  product.description = description;
  product.stock = stock;
  product.url_img = url_img;
  product.category_id = category_id;

  productRepository.create(product);
  await productRepository.save(product);

  return product;
};

export default createProductService;
