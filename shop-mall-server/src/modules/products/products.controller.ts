import {
  Controller,
  Get,
  Param,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { RedisService } from 'src/redis/cache.service';
import { CacheKey } from '@nestjs/cache-manager';

@Controller('products')
export class ProductController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly cacheService: RedisService,
  ) {}

  @Get()
  @CacheKey('products-redis')
  async getAllProducts() {
    const productsCache = (await this.cacheService.get(
      'products-redis',
    )) as string;

    if (productsCache) {
      return productsCache;
    }
    const products = await this.productsService.getAllProducts();
    await this.cacheService.set('products-redis', products, '1m');
    return products;
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
    @Query('provinces') provinces?: string,
    @Query('brands') brands?: string,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
  ) {
    return this.productsService.getProductsByCategory(
      categoryId,
      brandId,
      sortBy,
      order,
      provinces,
      brands,
      page,
    );
  }

  @Get(':id')
  getDetailProduct(@Param('id') productId: number) {
    return this.productsService.getDetailProductById(productId);
  }
}
