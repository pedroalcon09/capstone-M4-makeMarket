import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Favorites } from "../../entities/favorites.entity";
import { IFavourites } from "../../interfaces/favourites.interfaces"

async function createFavoriteProduct({ buyer_id, product_id }: IFavourites) {
  const favoriteRepository = AppDataSource.getRepository(Favorites);

  const favorite = await favoriteRepository.find();

  const favoriteUser = favorite.find((elem) => elem.id === buyer_id);
  if (!favoriteUser) {
    throw new AppError(404, "No user with this id");
  }
  const favoriteProduct = favorite.find((elem) => elem.id === product_id);
  if (!favoriteProduct) {
    throw new AppError(404, "No product with this id");
  }

  const newFavoriteProduct = new Favorites();
  // newFavoriteProduct.buyer = buyer_id;
  // newFavoriteProduct.product_id = product_id;

  favoriteRepository.create(newFavoriteProduct);
  await favoriteRepository.save(newFavoriteProduct);

  return newFavoriteProduct;
}
export default createFavoriteProduct;
