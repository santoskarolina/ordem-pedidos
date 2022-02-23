import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { State } from "../entities/state.entity";
import { Repository } from "typeorm";

@Injectable()
export class StateService {

  constructor(
    @InjectRepository(State)
    private stateRepository: Repository<State>
  ) {}

  find(){
    return this.stateRepository.find()
  }

  async findWithCities(id: number){
    const state = await this.stateRepository.findOne(id, {
      relations: [
        'cities'
      ]
    })
    if(state){
      return state
    }else{
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'not found',
        message: 'State not found.'
      }, HttpStatus.BAD_REQUEST)
    }
  }
}
