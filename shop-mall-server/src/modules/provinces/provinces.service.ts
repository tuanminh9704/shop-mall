import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProvincesService {
  constructor(private prisma: PrismaService) {}
  getAllProvice = async () => {
    try {
      const provinces = await this.prisma.province.findMany();
      if (!provinces) {
        throw new Error('Provinces is not found!');
      }
      return provinces;
    } catch (error) {
      console.log('[ERROR]: ', error);
      throw new Error('Internal Server Error');
    }
  };
}
