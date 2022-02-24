import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "../dto/create-user.dto";
import { CreateAddressDto } from "../../address/dto/addredd.dto";
import { AddressService } from "../../address/services/address.service";
import * as crypto from "crypto";
import { Role } from "../entities/role.entity";

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    private addressService: AddressService
  ) { }

  async create(user: CreateUserDto){
    const userfind = await this.userRepository.findOne({
      where: {
        email: user.email
      }
    })
    if(userfind){
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'email',
        message: 'Email already registred'
      }, HttpStatus.BAD_REQUEST)
    }
    try {
      user.password = crypto.createHmac('sha256', user.password).digest('hex')
      return this.userRepository.save(user)
    }catch (error) {
      console.log(error)
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'created',
        message: 'Failed to save new user'
      }, HttpStatus.BAD_REQUEST)
    }
  }

  async addAddress(user_id: number, new_address: CreateAddressDto){
    const user = await this.userRepository.findOne(user_id, {
      relations: ['adresses']
    })

    if(!user){
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'not found',
        message: 'User not found.'
      }, HttpStatus.BAD_REQUEST)
    }
    new_address.user = user
    const address = await this.addressService.create(new_address)
    user.adresses.push(address)

    await this.userRepository.save(user)
    return this.userRepository.findOne(user_id,
      { relations: ['adresses']}
    )
  }

  findByEmail(email:string){
    return this.userRepository.findOne({
      where: {
        email: email
      }
    })
  }

  async findOne(user_request: any) {
    const user = await this.userRepository.findOne({
      where: {
        email: user_request.email
      },
      select: [ 'user_id', 'name', 'email', 'phone', 'cpf']
    })

    if(!user) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'not found',
        message: 'User not found.'
      }, HttpStatus.BAD_REQUEST)
    return user
  }
    return user
  }


  find(){
    return this.userRepository.find({select: [
      'user_id', 'name', 'email', 'phone', 'cpf'
    ]})
  }

  async findUserWithRole(email: any){
   const user =  await this.userRepository.findOne({
      where: {
        email: email
      },
     relations: ['profile']
    })

    const profile = user.profile.map(p => p.role)
    return profile
  }

  async findCart(user_online: any){
    const user = await this.userRepository.findOne( {
      where: {
        email: user_online.email
      },
      select: ['user_id'],
      relations: ['orders', 'orders.order_items', 'orders.order_items.product']
    })

    if(!user){
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'not found',
        message: 'user not found'
      }, HttpStatus.BAD_REQUEST)
    }

    return user
  }
}
