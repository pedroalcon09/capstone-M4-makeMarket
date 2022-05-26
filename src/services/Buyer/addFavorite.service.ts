import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Buyer } from "../../entities/buyer.entity";
import { Product } from "../../entities/product.entity";

async function addToFavoriteService( buyerId: string, productId: string ) {
    const buyerRepository = AppDataSource.getRepository(Buyer)
    const buyer = await buyerRepository.findOne({where:{id:buyerId}})

    if(!buyer){
        throw new AppError(403, "User does not exist!")
    }

    const productRepository = AppDataSource.getRepository(Product)
    const product = await productRepository.findOne({where:{id:productId}})
    
    if(!product){
        throw new AppError(403, "Product does not exist!")
    }

    if(buyer && product){
        buyer.favourite_prod.push(product)
        await buyerRepository.save(buyer)
    }
    
    return product
}
  
export default addToFavoriteService;