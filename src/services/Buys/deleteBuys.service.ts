import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Buys } from "../../entities/buys.entities";

const deleteBuysService = async (id: string) => {
  const buyRepository = AppDataSource.getRepository(Buys);

  const buyDelete = await buyRepository.findOne({ where: { id: id } });

  if (!buyDelete) {
    throw new AppError(404, "No product with this id");
  }

  await buyRepository.delete(buyDelete!.id);

  return true;
};

export default deleteBuysService;
