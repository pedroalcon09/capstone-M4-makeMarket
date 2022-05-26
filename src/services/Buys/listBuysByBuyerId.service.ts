import { AppDataSource } from "../../data-source";
import { Buys } from "../../entities/buys.entities";
import { AppError } from "../../errors/appError";

async function listBuysByBuyerId(buyer_id: string) {
  const buysRepository = AppDataSource.getRepository(Buys);

  const buys = await buysRepository.find();

  const buyerBuys = buys.filter((elem) => elem.buyer_id === buyer_id);

  if (buyerBuys.length === 0) {
    throw new AppError(404, "No buys from this buyer to list");
  }

  return buyerBuys;
}

export default listBuysByBuyerId;
