import { AppDataSource } from "../../data-source";
import { Category } from "../../entities/category.entity";
import { AppError } from "../../errors/appError";

const categoryUpdateService = async (categoryId: string, name: string) => {
    const categoryRepository = AppDataSource.getRepository(Category)
    const categories = await categoryRepository.find()

    const categoryAlreadyExists = categories.find(category => category.name === name)

    if(categoryAlreadyExists){
        throw new AppError(409, "This category already exists")
    }

    const category = categories.find(category => category.id === categoryId)

    await categoryRepository.update(category!.id, {name: name, updated_at: new Date()})
    
    return true
}

export default categoryUpdateService