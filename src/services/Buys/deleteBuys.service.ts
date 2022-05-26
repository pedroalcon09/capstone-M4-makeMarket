import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Buys } from "../../entities/buys.entities";
import { Buyer } from "../../entities/buyer.entity";

const deleteBuysService = async (buyerId: string, buyId: string) => {
  const buyRepository = AppDataSource.getRepository(Buys);
  const buyerRepository = AppDataSource.getRepository(Buyer);

  const buyDelete = await buyRepository.findOne({ where: { id: buyId } });
  const buyer = await buyerRepository.findOne({ where: { id: buyerId } });

  if (!buyer) {
    throw new AppError(404, "No buyer found with this id");
  }

  if (!buyDelete) {
    throw new AppError(404, "No product with this id");
  }

  if (buyDelete.paid) {
    throw new AppError(403, "This buy has already been paid");
  }

  await buyRepository.delete(buyDelete!.id);

  const updatedBuys = buyer.buys.filter((elem) => elem.id !== buyId);

  const updatedBuyer = { ...buyer, buys: updatedBuys };

  await buyerRepository.save(updatedBuyer);

  return buyDelete;
};

export default deleteBuysService;
