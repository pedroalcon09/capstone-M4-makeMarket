import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Buys } from "../../entities/buys.entities";
import { IBuysPay } from "../../interfaces";
import { Buyer } from "../../entities/buyer.entity";

async function updateBuyService(
  buyerId: string,
  buyId: string,
  updateData: IBuysPay
) {
  const buyRepository = AppDataSource.getRepository(Buys);
  const buyerRepository = AppDataSource.getRepository(Buyer);

  const buy = await buyRepository.findOne({ where: { id: buyId } });
  const buyer = await buyerRepository.findOne({ where: { id: buyerId } });

  if (!buy) {
    throw new AppError(404, "No buy with this id");
  }

  const updatedBuy = { ...buy, ...updateData };
  updatedBuy.paid = true;
  updatedBuy.grade = updateData.grade;
  updatedBuy.feedback = updateData.feedback;

  await buyRepository.update(updatedBuy!.id, {
    paid: true,
    grade: updatedBuy.grade,
    feedback: updatedBuy.feedback,
  });

  if (buyer && buy) {
    buyer.buys.push(updatedBuy);
    await buyerRepository.save(buyer);
  }

  return updatedBuy;
}

export default updateBuyService;
