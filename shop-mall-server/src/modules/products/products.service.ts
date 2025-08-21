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

  getProductsByCategory = async (categoryId: number, brandId?: number) => {
    try {
      const allCategoryIds = await this.getAllDescendantCategoryIds(categoryId);
      const [products] = await Promise.all([
        this.prisma.product.findMany({
          where: {
            categoryId: {
              in: allCategoryIds,
            },
          },
          include: {
            images: true,
            productVariant: {
              select: {
                price: true,
                imageUrl: true,
                sku: true,
                stock: true,
              }
            },
            productOption: {
              select: {
                id: true,
                productId: true,
                name: true,
                position: true,
                values: true,
              },
            },
          },
        }),
      ]);
      return products;
    } catch (error) {
      console.log('[ERROR]: ', error);
      throw new Error('Internal Server Error!');
    }
  };

  getDetailProductById = async (productId: number) => {
    try {
      if (!productId) {
        throw new Error('ProductId is invalid!');
      }
      const product = await this.prisma.product.findFirst({
        where: {
          id: +productId,
        },
        include: {
          images: {
            select: {
              imageUrl: true,
            },
          },
          productOption: {
            select: {
              id: true,
              productId: true,
              name: true,
              position: true,
              values: true,
            },
          },
          productVariant: {
            select: {
              id: true,
              price: true,
              sku: true,
              imageUrl: true,
              stock: true,
              productId: true,
              VariantInventory: {
                select: {
                  id: true,
                  stockQuantity: true,
                  warehouse: {
                    select: {
                      id: true,
                      name: true,
                      address: true,
                      city: true,
                      province: true,
                      country: true,
                    },
                  },
                },
              },
            },
          },
        },
      });
      console.log('product====', product);
      if (!product) {
        throw new Error('Product is not found!');
      }
      return product;
    } catch (error) {
      console.log('[ERROR]: ', error);
      throw new Error('Internal Server Error!');
    }
  };

  private async getAllDescendantCategoryIds(
    categoryId: number,
  ): Promise<number[]> {
    const result: number[] = [];
    const stack = [+categoryId];

    while (stack.length > 0) {
      const currentId = stack.pop();
      if (currentId === undefined) continue;

      result.push(currentId);

      const children = await this.prisma.category.findMany({
        where: { parentId: +currentId },
      });

      for (const child of children) {
        stack.push(child.id);
      }
    }

    return result;
  }
}
