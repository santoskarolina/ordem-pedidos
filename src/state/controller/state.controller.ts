import { Controller, Get, Param } from "@nestjs/common";
import { StateService } from '../services/state.service';

@Controller('state')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @Get()
  find(){
    return this.stateService.find()
  }

  @Get(':id')
  findOne(@Param('id') id: number){
    return this.stateService.findWithCities(id)
  }
}
