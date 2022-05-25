import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Buys } from "../../entities/buys.entities";

const deleteBuysService = async (id: string) => {
  const BuysRepository = AppDataSource.getRepository(Buys);

  const Buy = await BuysRepository.find();

  const buysDelete = Buy.find((product) => product.id === id);

  if (!buysDelete) {
    throw new AppError(404, "No product with this id");
  }

  await BuysRepository.delete(buysDelete!.id);

  return true;
};

export default deleteBuysService;
