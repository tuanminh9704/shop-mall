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
    @Query('sortBy') sortBy?: string,
    @Query('order') order?: string,
    @Query('provinces') provinceIds?: number[],
    @Query('brands') brandIds?: number[],
  ) {
    return this.productsService.getProductsByCategory(
      categoryId,
      brandId,
      sortBy,
      order,
      provinceIds,
      brandIds,
    );
  }

  @Get(':id')
  getDetailProduct(@Param('id') productId: number) {
    return this.productsService.getDetailProductById(productId);
  }
}
