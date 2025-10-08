import { PrismaClient, Category as PrismaCategory } from '@prisma/client';

export interface BreadCrumb {
  categoryId: number;
  categoryName: string;
}

export const buildBreadcrum = async (
  prisma: PrismaClient,
  categoryId: number,
  isRoot = true,
  extraLast?: string,
): Promise<BreadCrumb[]> => {
  const breadCrumb: BreadCrumb[] = [];
  const ROOT_BREAD_CRUMB = {
    categoryId: 0,
    categoryName: 'Trang Chủ',
  };

  const category: PrismaCategory | null = await prisma.category.findFirst({
    where: {
      id: categoryId,
    },
  });

  if (category) {
    breadCrumb.push({
      categoryId: category.id,
      categoryName: category.name,
    });

    if (category.parentId) {
      const parentCategory = await buildBreadcrum(
        prisma,
        category.parentId,
        false,
      );
      breadCrumb.unshift(...parentCategory);
    }
  }
  if (isRoot) {
    breadCrumb.unshift(ROOT_BREAD_CRUMB);
  }
  if (extraLast) {
    breadCrumb.push({
      categoryId: -1,
      categoryName: extraLast,
    });
  }

  return breadCrumb;
};
