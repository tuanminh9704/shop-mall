import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/products/products.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { BrandsModule } from './modules/brands/brands.module';
import { ProvincesModule } from './modules/provinces/provinces.module';
@Module({
  imports: [ProductsModule, CategoriesModule, BrandsModule, ProvincesModule],
})
export class AppModule {}
