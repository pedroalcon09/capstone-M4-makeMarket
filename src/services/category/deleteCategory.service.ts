import { AppDataSource } from "../../data-source";
import { Category } from "../../entities/category.entity";


const deleteCategoryService = async (categoryId: string) => {
    const categoryRepository = AppDataSource.getRepository(Category)
    const categories = await categoryRepository.find()

    const category = categories.find(category => category.id === categoryId)

    await categoryRepository.delete(category!.id)

    return true
}

export default deleteCategoryService