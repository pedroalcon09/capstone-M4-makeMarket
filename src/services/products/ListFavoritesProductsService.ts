import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Favorites } from "../../entities/favorites.entity";

async function listFavoriteProductService(buyerID: string) {

  const favoriteRepository = AppDataSource.getRepository(Favorites)

  const favorite = await favoriteRepository.find()

  const favorites = favorite.find((elem) => elem.id === buyerID);
  
  if (!favorites) {
    throw new AppError(404, "No user with this id");
  }
}
export default listFavoriteProductService;
