import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Buys } from "../../entities/buys.entities";
import { Buyer } from "../../entities/buyer.entity";
import { IBuysCreate } from "../../interfaces/buys.interfaces";
import { Product } from "../../entities/product.entity";

async function createBuysService({ buyer_id, product_id }: IBuysCreate) {
  const buyRepository = AppDataSource.getRepository(Buys);
  const buyerRepository = AppDataSource.getRepository(Buyer);
  const productRepository = AppDataSource.getRepository(Product);

  const buyer = await buyerRepository.findOne({ where: { id: buyer_id } });
  const product = await productRepository.findOne({
    where: { id: product_id },
  });

  if (!buyer) {
    throw new AppError(404, "No user with this id");
  }
  if (!product) {
    throw new AppError(404, "No product with this id");
  }

  const newBuy = new Buys();
  newBuy.paid = false;
  newBuy.buyer_id = buyer_id;
  newBuy.product_id = product.id;

  buyRepository.create(newBuy);

  const newBuysArray = [...buyer.buys, newBuy];

  console.log(newBuysArray);

  buyerRepository.update(buyer!.id, {
    buys: newBuysArray,
  });

  await buyRepository.save(newBuy);

  return newBuy;
}
export default createBuysService;
