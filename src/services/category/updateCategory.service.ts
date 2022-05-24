import { AppDataSource } from "../../data-source";
import { Category } from "../../entities/category.entity";
import { AppError } from "../../errors/appError";

const categoryUpdateService = async (categoryId: string, name: string) => {
  const categoryRepository = AppDataSource.getRepository(Category);
  const categories = await categoryRepository.find();

  const category = categories.find((category) => category.id === categoryId);

  if (category) {
    if (category.name === name) {
      throw new AppError(409, "Name must be different from the previous one");
    }
  } else {
    throw new AppError(404, "No category with this ID");
  }

  await categoryRepository.update(category!.id, { name: name });

  const categoriesUpdate = await categoryRepository.find();

  const categoryUpdated = categoriesUpdate.find(
    (category) => category.id === categoryId
  );

  return categoryUpdated;
};

export default categoryUpdateService;
