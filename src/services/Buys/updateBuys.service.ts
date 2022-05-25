import { AppDataSource } from "../../data-source";
import { IBuyerUpdate } from "../../interfaces/buyer.interfaces";
import bcrypt from "bcrypt";
import { AppError } from "../../errors/appError";
import { Buys } from "../../entities/buys.entities";
import { IBuysPay } from "../../interfaces";

async function updateBuyService(id: string, updateData: IBuysPay) {
  const buyRepository = AppDataSource.getRepository(Buys);

  const buyUpdate = await buyRepository.findOne({ where: { id: id } });

  if (!buyUpdate) {
    throw new AppError(404, "No buy with this id");
  }

  const updatedBuy = { ...buyUpdate, ...updateData };

  await buyRepository.update(updatedBuy!.id, {
    grade: buyUpdate.grade,
    feedback: buyUpdate.feedback,
  });

  return updatedBuy;
}

export default updateBuyService;
