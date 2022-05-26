import { AppDataSource } from "../../data-source";
import { Buyer } from "../../entities/buyer.entity";
import { Buys } from "../../entities/buys.entities";
import { AppError } from "../../errors/appError";

async function listBuysByBuyerId(buyer_id: string) {
  const buyerRepository = AppDataSource.getRepository(Buyer);
  const buyer = await buyerRepository.findOne({ where: { id: buyer_id } });

  if (!buyer) {
    throw new AppError(404, "No buyer with this id");
  }

  const buys = buyer?.buys;

  if (buys?.length === 0) {
    throw new AppError(404, "No favorite product to be listed");
  }

  return buys;
}

export default listBuysByBuyerId;
