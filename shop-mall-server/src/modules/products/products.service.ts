import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  getAllProducts = async () => {
    try {
      const productsAll: Product[] = await this.prisma.product.findMany({
        include: {
          category: {
            select: {
              id: true,
              name: true,
            },
          },
          images: {
            select: {
              id: true,
              imageUrl: true,
            },
          },
        },
      });

      return productsAll;
    } catch (error) {
      console.log('[ERROR]: ', error);
      throw new Error('Internal Server Error!');
    }
  };

  getFeatureProducts = async () => {
    try {
      const productPromotions = await this.prisma.productPromotion.findMany({
        where: {
          type: 'TOP_DEAL',
        },
        include: {
          product: {
            select: {
              name: true,
              price: true,
              images: {
                where: {
                  isMain: true,
                },
                select: {
                  imageUrl: true,
                  isMain: true,
                  order: true,
                },
              },
            },
          },
        },
      });
      return productPromotions;
    } catch (error) {
      console.log('[ERROR]: ', error);
      throw new Error('Internal Server Error!');
    }
  };
}
