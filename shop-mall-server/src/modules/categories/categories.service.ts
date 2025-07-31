import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  getAllRootCategories = async () => {
    try {
      const rootCategories = await this.prisma.category.findMany({
        where: {
          parentId: null,
        },
      });
      return rootCategories;
    } catch (error) {
      console.log('[ERROR]: ', error);
      throw new Error('Internal Server Error!');
    }
  };

  getCategoryWithChildrensById = async (id: number) => {
    try {
      const categoriesWithChilrens = await this.prisma.category.findFirst({
        where: {
          id: +id,
        },
        include: {
          children: true,
        },
      });
      return categoriesWithChilrens;
    } catch (error) {
      console.log('[ERROR]: ', error);
      throw new Error('Internal Server Error!');
    }
  };
}
