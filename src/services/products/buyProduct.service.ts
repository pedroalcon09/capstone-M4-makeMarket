import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Buys } from "../../entities/buys.entities";
import { IBuys } from "../../interfaces/buys.interfaces";

async function createBuyProductService({ buyer_id, product_id }: IBuys) {
  const purchasseRepository = AppDataSource.getRepository(Buys);

  const purchasseAwait = await purchasseRepository.find();

  const purchasse = purchasseAwait.find((elem) => elem.id === buyer_id);

  if (!purchasse) {
    throw new AppError(404, "User not found");
  }

  const purchasseProduct = purchasseAwait.find((elem) => elem.id === product_id);
  if (!purchasseProduct) {
    throw new AppError(404, "No product with this id");
  }

  const newPurchasseProduct = new Buys();

  purchasseRepository.create(newPurchasseProduct);
  await purchasseRepository.save(newPurchasseProduct);

  return newPurchasseProduct;
}
export default createBuyProductService;
