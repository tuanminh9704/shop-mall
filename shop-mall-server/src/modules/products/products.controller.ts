import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Get('/promotion')
  getFeatureProducts() {
    return this.productsService.getFeatureProducts();
  }

  @Get('/by-category/:id')
  getProductsByCategory(
    @Param('id') categoryId: number,
    @Query('brandId') brandId?: number,
  ) {
    return this.productsService.getProductsByCategory(categoryId, brandId);
  }
}
