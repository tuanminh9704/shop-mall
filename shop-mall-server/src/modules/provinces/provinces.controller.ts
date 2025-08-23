import { Controller, Get } from '@nestjs/common';
import { ProvincesService } from './provinces.service';

@Controller('provinces')
export class ProvincesController {
  constructor(private readonly provinceService: ProvincesService) {}

  @Get('')
  getAllProvinces() {
    return this.provinceService.getAllProvice();
  }
}
