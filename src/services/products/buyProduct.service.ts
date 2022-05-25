import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Buys } from "../../entities/buys.entity";
import { IBuys } from "../../interfaces/buys.interfaces"
async function listFavoriteProductService(buyerID: string) {
  const purchasseRepository = AppDataSource.getRepository(Buys);

  const purchasseAwait = await purchasseRepository.find();

  const purchasse = purchasseAwait.find((elem) => elem.id === buyerID);

  if (!purchasse) {
    throw new AppError(404, "No favorite products found");
  }

  const newPurchasseProduct = new IBuys();
  // newFavoriteProduct.buyer = buyer_id;
  // newFavoriteProduct.product_id = product_id;

  purchasseRepository.create(newPurchasseProduct);
  await purchasseRepository.save(newPurchasseProduct);

  return newPurchasseProduct;
  
}
export default listFavoriteProductService;
