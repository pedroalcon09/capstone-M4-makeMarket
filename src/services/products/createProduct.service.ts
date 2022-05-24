import { IProductsCreate } from "../../interfaces/index";
import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product.entity";

const createProductService = async ({
  name,
  price,
  description,
  stock,
  url_img,
  category_id,
  seller_id,
}: IProductsCreate) => {
  const productRepository = AppDataSource.getRepository(Product);

  const product = new Product();
  product.name = name;
  product.price = price;
  product.description = description;
  product.stock = stock;
  product.url_image = url_img;
  product.category_id = category_id;
  product.seller_id = seller_id;

  productRepository.create(product);
  await productRepository.save(product);

  return product;
};

export default createProductService;
