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

  getProductsByCategory = async (
    categoryId: number,
    brandId?: number,
    sortBy?: string,
    order?: string,
    provinces?: string,
    brands?: string,
    page: number = 1,
  ) => {
    try {
      const pageSize = 10;
      const allCategoryIds = await this.getAllDescendantCategoryIds(categoryId);
      let orderBy = {};
      const brandIds = brands
        ?.split(',')
        .map((brandId: string) => Number(brandId))
        .filter((id) => !isNaN(id));

      const provinceIds = provinces
        ?.split(',')
        .map((province: string) => Number(province));

      if (sortBy) {
        if (sortBy === 'ctime') {
          orderBy = { createdAt: order };
        } else {
          orderBy = { [sortBy]: order };
        }
      }
      const skip = (page - 1) * pageSize;

      const [products, total] = await Promise.all([
        this.prisma.product.findMany({
          where: {
            categoryId: {
              in: allCategoryIds,
            },
            ...(brandIds?.length ? { brandId: { in: brandIds } } : {}),
            ...(provinceIds?.length
              ? {
                  seller: {
                    provinceId: {
                      in: provinceIds,
                    },
                  },
                }
              : {}),
          },
          ...(orderBy && { orderBy }),
          skip: skip,
          take: pageSize,
          include: {
            images: true,
            productVariant: {
              select: {
                imageUrl: true,
                sku: true,
                stock: true,
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
          },
        }),

        this.prisma.product.count(),
      ]);
      return {
        data: products,
        pagination: {
          total: total,
          page: page,
          pageSize: pageSize,
          totalPages: Math.ceil(total / pageSize),
        },
      };
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
          brand: {
            select: {
              id: true,
              name: true,
              logoUrl: true,
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
