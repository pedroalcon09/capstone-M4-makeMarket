import { AppDataSource } from "../../data-source";
import { IBuyerUpdate } from "../../interfaces/buyer.interfaces";
import bcrypt from "bcrypt";
import { AppError } from "../../errors/appError";
import { Buys } from "../../entities/buys.entities";
import { IBuysPay } from "../../interfaces";

async function updateBuyerService(id: string, updateData: IBuysPay) {
  const buyRepository = AppDataSource.getRepository(Buys);

  const buy = await buyRepository.find();

  const buyUpdate = buy.find((buyer) => buyer.id === id);

  if (!buyUpdate) {
    throw new AppError(404, "No user with this id");
  }

    const updatedBuy = { ...buyUpdate, ...updateData };

    await buyRepository.update(updatedBuy!.id, {
    grade: buyUpdate.grade,
    feedback: buyUpdate.feedback
    });

    return updatedBuy;
}


export default updateBuyerService;
