import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  getAllRootCategories = async () => {
    const rootCategories = await this.prisma.category.findMany({
      where: {
        parentId: null,
      },
    });
    return rootCategories;
  };
}
