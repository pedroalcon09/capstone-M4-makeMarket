import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Buyer } from "../../entities/buyer.entity";
import { Product } from "../../entities/product.entity";

async function removedFromFavoriteService(buyerId: string, productId: string) {
  const buyerRepository = AppDataSource.getRepository(Buyer);
  const buyer = await buyerRepository.findOne({ where: { id: buyerId } });

  if (!buyer) {
    throw new AppError(403, "User does not exist!");
  }

  const productRepository = AppDataSource.getRepository(Product);
  const product = await productRepository.findOne({ where: { id: productId } });

  if (!product) {
    throw new AppError(403, "Product does not exist!");
  }

  const removedProduct = buyer?.favourite_prod.find(
    (product) => product.id === productId
  );

  if (!removedProduct) {
    throw new AppError(403, "This product is not in your favorite list!");
  }

  // const productIndex = buyer.favourite_prod.findIndex(prod => prod.id !== productId)
  // if(productIndex === -1){
  //     throw new AppError(403, "This product is not ")
  // }

  if (buyer && removedProduct && product) {
    const updatedFavs = buyer.favourite_prod.filter(
      (product) => product.id !== productId
    );
    const updatedBuyer = { ...buyer, favourite_prod: updatedFavs };
    await buyerRepository.save(updatedBuyer);
  }

  return product;
}

export default removedFromFavoriteService;
