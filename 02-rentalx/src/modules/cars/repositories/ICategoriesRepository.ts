import { Category } from "../model/Category";

/**
 * DTO => Data Transfer Object
 * Criar um objeto que é responsável pela transferência de dados de uma classe à outra
 */

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };
