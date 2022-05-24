import { AppDataSource } from "../../data-source";
import { Category } from "../../entities/category.entity";
import { AppError } from "../../errors/appError";

const listCategoryService = async () => {
  const categoryReporitory = AppDataSource.getRepository(Category);

  const categories = await categoryReporitory.find();

  if (categories.length === 0) {
    throw new AppError(404, "No categories to be listed");
  }

  return categories;
};

export default listCategoryService;
