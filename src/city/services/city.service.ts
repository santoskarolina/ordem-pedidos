import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { City } from "../entities/city.entity";
import { Repository } from "typeorm";

@Injectable()
export class CityService {

  constructor(
    @InjectRepository(City)
    private cityRepository: Repository<City>
  ) {}

  find(){
    return this.cityRepository.find({relations: [
      'state'
      ]})
  }
}
