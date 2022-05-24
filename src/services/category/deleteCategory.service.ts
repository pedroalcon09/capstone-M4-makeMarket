import { AppDataSource } from "../../data-source";
import { Category } from "../../entities/category.entity";
import { AppError } from "../../errors/appError";

const deleteCategoryService = async (categoryId: string) => {
  const categoryRepository = AppDataSource.getRepository(Category);
  const categories = await categoryRepository.find();

  const category = categories.find((elem) => elem.id === categoryId);

  if (!category) {
    throw new AppError(404, "No category with this id");
  }

  await categoryRepository.delete(category!.id);
  return category;
};

export default deleteCategoryService;
