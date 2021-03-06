import { Body, Controller, Get, Param, Post, Request, UseGuards } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { CreateUserDto } from "../dto/create-user.dto";
import { CreateAddressDto } from "../../address/dto/addredd.dto";
import { Role } from "../entities/role.entity";
import { Roles } from "../../authorization/decorator/role.decorator";
import { RoleGuard } from "../../authorization/guards/role.guard";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() user: CreateUserDto){
    return this.userService.create(user)
  }

  @UseGuards(RoleGuard)
  @Roles(Role.USER)
  @Post(':id/add-address')
  addAddress(@Body() address: CreateAddressDto, @Param('id') user_id: number){
    return this.userService.addAddress(user_id, address)
  }

  @UseGuards(RoleGuard)
  @Roles(Role.USER)
  @Get('my-profile')
  findOne(@Request() request){
    return this.userService.findOne(request.user)
  }

  @UseGuards(RoleGuard)
  @Roles(Role.USER)
  @Get('my-orders')
  myOrders(@Request() request){
    return this.userService.findCart(request.user)
  }

  @UseGuards(RoleGuard)
  @Roles(Role.ADMIN)
  @Get()
  find(){
    return this.userService.find()
  }

}
