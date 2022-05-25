import { IProductsCreate } from "../../interfaces/index";
import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product.entity";
import { Seller } from "../../entities/seller.entity";
import { AppError } from "../../errors/appError";

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
  const sellerRepository = AppDataSource.getRepository(Seller);

  const seller = await sellerRepository.findOne({ where: { id: seller_id } });

  const product = new Product();
  product.name = name;
  product.price = price;
  product.description = description;
  product.stock = stock;
  product.url_image = url_img;
  product.category_id = category_id;

  if (seller) {
    product.seller_id = seller.id;
  } else {
    throw new AppError(404, "No seller found with this id");
  }

  productRepository.create(product);
  await productRepository.save(product);

  return product;
};

export default createProductService;
