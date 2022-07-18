import { Request, Response } from "express";
import { ListCategoriesUseCases } from "./ListCategoriesUseCases";

class ListCategoriesController {
  constructor(private listCategoryUseCase: ListCategoriesUseCases) {}

  handle(request: Request, response: Response): Response {
    const categories = this.listCategoryUseCase.execute();
    return response.json(categories);
  }
}

export { ListCategoriesController };
