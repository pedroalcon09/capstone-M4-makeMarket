import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Buyer } from "../../entities/buyer.entity";

async function listFavoritesService( buyerId: string ) {
    const buyerRepository = AppDataSource.getRepository(Buyer)
    const buyer = await buyerRepository.findOne({where:{id:buyerId}})

    if(!buyer){
        throw new AppError(403, "User does not exist!")
    }

    return buyer?.favourite_prod
}
  
export default listFavoritesService;