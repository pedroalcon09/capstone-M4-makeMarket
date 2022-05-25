import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Favorites } from "../../entities/favorites.entity";
import { IFavouritesCreate } from "../../interfaces/favourites.interfaces";
import { Buyer } from "../../entities/buyer.entity";
import { Product } from "../../entities/product.entity";

async function createFavoriteService(buyer_id: string, product_id: string) {
  const buyerRepository = AppDataSource.getRepository(Buyer);

  const buyer = await buyerRepository.find({ where: { id: buyer_id } });
  if (!buyer) {
    throw new AppError(404, "No buyer with this id");
  }

  const productRepository = AppDataSource.getRepository(Product);

  const product = await productRepository.find({ where: { id: product_id } });
  if (!product) {
    throw new AppError(404, "No product with this id");
  }

  const favoriteRepository = AppDataSource.getRepository(Favorites);

  const favorite = await favoriteRepository.find({
    where: { buyer_id: buyer_id, product_id: product_id },
  });

  if (favorite) {
    throw new AppError(404, "This relation already exists");
  }

  /* const newFavoriteProduct = new Favorites();
  newFavoriteProduct.buyer_id = buyer_id;
  newFavoriteProduct.product_id = product_id; */

  const newFavourite = favoriteRepository.create({ buyer_id, product_id });
  console.log(newFavourite);
  await favoriteRepository.save(newFavourite);

  return newFavourite;
}
export default createFavoriteService;
