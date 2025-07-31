import { Controller, Get, Param } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  getAllRootCategories() {
    return this.categoriesService.getAllRootCategories();
  }

  @Get(':id')
  getCategoryWithChildrensById(@Param('id') id: number) {
    return this.categoriesService.getCategoryWithChildrensById(id);
  }
}
