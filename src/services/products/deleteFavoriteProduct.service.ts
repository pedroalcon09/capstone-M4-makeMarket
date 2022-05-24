import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Buyer } from "../../entities/buyer.entity";
import { Product } from "../../entities/product.entity";
import { Favorites } from "../../entities/favorites.entity";

async function deleteFavoriteProduct(buyerID: string, productId: string) {
  const favoriteRepository = AppDataSource.getRepository(Favorites);

  const favorite = await favoriteRepository.find();

  const favoriteUser = favorite.find((elem) => elem.id === buyerID);
  if (!favoriteUser) {
    throw new AppError(404, "No user with this id");
  }
  const favoriteProduct = favorite.find((elem) => elem.id === productId);
  if (!favoriteProduct) {
    throw new AppError(404, "No product with this id");
  }

  await favoriteRepository.delete(favoriteProduct!.id);

  return favoriteProduct
}
export default deleteFavoriteProduct;
