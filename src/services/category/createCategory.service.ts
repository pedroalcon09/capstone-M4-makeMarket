import { ICategories } from "../../interfaces";
import { AppDataSource } from "../../data-source"
import { AppError } from "../../errors/appError";
import { Category } from "../../entities/category.entity";

const createCategoryService = async ({name}: ICategories) => {
    const categoryRepository = AppDataSource.getRepository(Category)
    const categories = await categoryRepository.find()
    
    const categoryAlreadyExists = categories.find(category => category.name === name)

    if(categoryAlreadyExists){
        throw new AppError(409, "This category already exists")
    }

    const category = new Category()
    category.name = name

    categoryRepository.create(category)

    await categoryRepository.save(category)

    return category
}

export default createCategoryService