import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Buys } from "../../entities/buys.entity";

async function listBuyProductService(buyerID: string) {
  const purchasseRepository = AppDataSource.getRepository(Buys);

  const purchasseAwait = await purchasseRepository.find();

  const purchasse = purchasseAwait.find((elem) => elem.id === buyerID);

  if (!purchasse) {
    throw new AppError(404, "No favorite products found");
  }

  return purchasse;
}
export default listBuyProductService;
