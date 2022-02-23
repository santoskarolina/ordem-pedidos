import { Controller, Get } from "@nestjs/common";
import { CityService } from '../services/city.service';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get()
  find(){
    return this.cityService.find()
  }
}
