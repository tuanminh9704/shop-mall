import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Brand } from '@prisma/client';

@Injectable()
export class BrandsService {
  constructor(private prisma: PrismaService) {}

  getAllFeatureBrands = async (): Promise<Brand[]> => {
    try {
      const featureBrands: Brand[] = await this.prisma.brand.findMany({
        where: { isFeatured: true },
      });
      return featureBrands;
    } catch (error) {
      console.log('[ERROR]: ', error);
      throw new Error('Internal Server Error!');
    }
  };
}