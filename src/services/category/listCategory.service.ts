import { AppDataSource } from "../../data-source";
import { Category } from "../../entities/category.entity";

const listCategoryService = async () => {
    const categoryReporitory = AppDataSource.getRepository(Category)

    const categories = await categoryReporitory.find()
    
    return categories
}

export default listCategoryService