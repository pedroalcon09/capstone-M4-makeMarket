import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Buyer } from "../../entities/buyer.entity";
import { Product } from "../../entities/product.entity";
import { Favorites } from "../../entities/favorites.entity";

async function deleteFavoriteService(buyer_id: string, product_id: string) {
  const buyerRepository = AppDataSource.getRepository(Buyer);

  const favoriteRepository = AppDataSource.getRepository(Favorites);

  const favorite = await favoriteRepository.findOne({
    where: { buyer_id: buyer_id, product_id: product_id },
  });

  if (favorite) {
    await favoriteRepository.delete(favorite.id);
    return favorite;
  } else {
    throw new AppError(
      404,
      "No relationship between this product and this buyer"
    );
  }
}
export default deleteFavoriteService;
