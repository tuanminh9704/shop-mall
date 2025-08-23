import { Controller, Get } from '@nestjs/common';
import { BrandsService } from './brands.service';

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Get('')
  getAllBrands() {
    return this.brandsService.getAllBrands();
  }

  @Get('/feature')
  getAllFeatureBrands() {
    return this.brandsService.getAllFeatureBrands();
  }
}
