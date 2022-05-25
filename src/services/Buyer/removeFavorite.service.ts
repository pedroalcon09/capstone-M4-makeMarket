import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Buyer } from "../../entities/buyer.entity";
import { Product } from "../../entities/product.entity";

async function removedFromFavoriteService( buyerId: string, productId: string ) {
    const buyerRepository = AppDataSource.getRepository(Buyer)
    const buyer = await buyerRepository.findOne({where:{id:buyerId}})

    if(!buyer){
        throw new AppError(403, "User does not exist!")
    }

    const removedProduct = buyer?.favourite_prod.find(product => product.id === productId)

    if(!removedProduct){
        throw new AppError(403, "This product is not in your favorite list!")
    }

    const productRepository = AppDataSource.getRepository(Product)
    const product = await productRepository.findOne({where:{id:productId}})

    if(!product){
        throw new AppError(403, "Product does not exist!")
    }

    if(buyer && removedProduct && product){
        buyer.favourite_prod.filter(prod => prod.id !== productId)
        await buyerRepository.save(buyer)
    }

    return product
}
  
export default removedFromFavoriteService;