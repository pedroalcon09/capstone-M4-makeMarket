import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Buyer } from "../../entities/buyer.entity";
import { Product } from "../../entities/product.entity";
import { Favorites } from "../../entities/favorites.entity";

async function deleteFavoriteProduct(buyerID: string, productId: string) {
  const buyerRepository = AppDataSource.getRepository(Buyer);
  const productRepository = AppDataSource.getRepository(Product);
  const favoriteRepository = AppDataSource.getRepository(Favorites)

  const buyers = await buyerRepository.find();
  const products = await productRepository.find();
  const favorite = await favoriteRepository.find();

  const favoriteUser = favorite.find((elem) => elem.id === buyerID);
  if (!favoriteUser) {
    throw new AppError(404, "No user with this id");
  }
  const favoriteProduct = favorite.find((elem) => elem.id === productId);
  if (!favoriteProduct) {
    throw new AppError(404, "No product with this id");
  }
  
  await favoriteProduct.delete(favoriteProduct.id);

}
export default deleteFavoriteProduct
