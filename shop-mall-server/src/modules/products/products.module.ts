import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ProductController } from './products.controller';
import { ProductsService } from './products.service';
import { RedisModule } from 'src/redis/cache.module';
@Module({
  imports: [PrismaModule, RedisModule],
  controllers: [ProductController],
  providers: [ProductsService],
})
export class ProductsModule {}
