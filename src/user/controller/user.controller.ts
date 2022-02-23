import { Body, Controller, Get, Param, Post, Request, UseGuards } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { CreateUserDto } from "../dto/create-user.dto";
import { CreateAddressDto } from "../../address/dto/addredd.dto";
import { JwtLocalGuard } from "../../auth/guards/jwt-auth.guard";
// import RoleGuard from "../../auth/guards/role.guard";
import { Role } from "../entities/role.entity";
import { Roles } from "../../auth/decorator/role.decorator";
import { RoleGuard } from "../../auth/guards/role.guard";
// import { RoleGuard } from "../../auth/guards/role.guard";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() user: CreateUserDto){
    return this.userService.create(user)
  }

  @UseGuards(JwtLocalGuard)
  @Post(':id/add-address')
  addAddress(@Body() address: CreateAddressDto, @Param('id') user_id: number){
    return this.userService.addAddress(user_id, address)
  }

  @UseGuards(RoleGuard)
  @Get('my-profile')
  findOne(@Request() request){
    return this.userService.findOne(request.user)
  }

  @UseGuards(RoleGuard)
  @Roles(Role.ADMIN)
  @Get()
  find(){
    return this.userService.find()
  }
}
