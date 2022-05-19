import { AppDataSource } from "../../data-source";
import { IBuyerUpdate } from "../../interfaces/buyer.interfaces";
import bcrypt from "bcrypt";
import { AppError } from "../../errors/appError";
import { Buyer } from "../../entities/buyer.entity";

async function updateBuyerService(id: string, updateData: IBuyerUpdate) {
  const buyerRepository = AppDataSource.getRepository(Buyer);

  const buyers = await buyerRepository.find();

  const buyerUpdate = buyers.find((buyer) => buyer.id === id);

  if (!buyerUpdate) {
    throw new AppError(404, "No user with this id");
  }

  const newPassword = updateData.password;

  if (newPassword) {
    if (bcrypt.compareSync(newPassword, buyerUpdate!.password)) {
      throw new AppError(
        409,
        "Password must be different from the current one"
      );
    }
  }

  const updatedBuyer = { ...buyerUpdate, ...updateData };

  const hashedPassword = bcrypt.hashSync(newPassword, 10);

  await buyerRepository.update(updatedBuyer!.id, {
    name: updatedBuyer.name,
    email: updatedBuyer.email,
    password: hashedPassword,
    updated_at: new Date(),
  });

  return true;
}

export default updateBuyerService;
