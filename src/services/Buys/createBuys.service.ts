import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Buys } from "../../entities/buys.entities";
import { IBuys } from "../../interfaces/buys.interfaces";

async function createBuysProduct({ buyer_id, product_id }: IBuys) {
  const buyRepository = AppDataSource.getRepository(Buys);

  const favorite = await buyRepository.find();

  const buysUser = favorite.find((elem) => elem.id === buyer_id);
  if (!buysUser) {
    throw new AppError(404, "No user with this id");
  }
  const buysProduct = favorite.find((elem) => elem.id === product_id);
  if (!buysProduct) {
    throw new AppError(404, "No product with this id");
  }

  const newFavoriteProduct = new Buys();

  buyRepository.create(newFavoriteProduct);
  await buyRepository.save(newFavoriteProduct);

  return newFavoriteProduct;
}
export default createBuysProduct;
