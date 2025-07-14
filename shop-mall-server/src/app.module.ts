import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './modules/orders/orders.module';
import { CategoriesModule } from './modules/categories/categories.module';
@Module({
  imports: [ProductsModule, CategoriesModule, OrdersModule],
})
export class AppModule {}
