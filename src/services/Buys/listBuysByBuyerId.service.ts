import { AppDataSource } from "../../data-source";
import { Buys } from "../../entities/buys.entities";
import { AppError } from "../../errors/appError";

async function listBuysByBuyerId(buyer_id: string) {
  const buysRepository = AppDataSource.getRepository(Buys);

  const buys = await buysRepository.find();

  const buyerBuys = buys.find((elem) => elem.buyer_id === buyer_id);

  if (buys.length === 0) {
    throw new AppError(404, "No buys from this buyer to list");
  }

  return buys;
}

export default listBuysByBuyerId;
