import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Favorites } from "../../entities/favorites.entity";

async function listFavoriteService(buyer_id: string) {
  const favoriteRepository = AppDataSource.getRepository(Favorites);

  const favorites = await favoriteRepository.find({
    where: {
      buyer_id: buyer_id,
    },
  });

  if (!favorites) {
    throw new AppError(404, "This buyer has no favourite products");
  }

  return favorites;
}
export default listFavoriteService;
