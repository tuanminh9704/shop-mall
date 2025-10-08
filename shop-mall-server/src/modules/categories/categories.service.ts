import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CategoryWithChildren, Category } from './dto/category';
import { buildBreadcrum } from 'src/utils/buildBreadcrum';

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
      const categoriesWithChilrens = await this.prisma.category.findMany({
        where: {
          id: +id,
        },
        include: {
          children: true,
        },
      });
      const result = await Promise.all(
        categoriesWithChilrens.map((category) =>
          this.getChildrenOfCategory(category),
        ),
      );
      const breadCrumb = await buildBreadcrum(this.prisma, Number(id));
      return {
        categories: result,
        breadCrumb,
      };
    } catch (error) {
      console.log('[ERROR]: ', error);
      throw new Error('Internal Server Error!');
    }
  };

  getAllCategoriesWithTree = async () => {
    const rootCategory = await this.prisma.category.findMany({
      where: {
        parentId: null,
      },
      orderBy: {
        id: 'asc',
      },
    });

    const result = await Promise.all(
      rootCategory.map((category) => this.getChildrenOfCategory(category)),
    );
    return result;
  };

  private async getChildrenOfCategory(
    category: Category,
  ): Promise<CategoryWithChildren> {
    const children = await this.prisma.category.findMany({
      where: { parentId: category.id },
      orderBy: { id: 'asc' },
    });

    const childrenWithNested = await Promise.all(
      children.map((child) => this.getChildrenOfCategory(child)),
    );

    return {
      ...category,
      children: childrenWithNested.length > 0 ? childrenWithNested : undefined,
    };
  }
}
