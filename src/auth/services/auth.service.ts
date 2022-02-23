import { Injectable } from '@nestjs/common';
import { UserService } from "../../user/services/user.service";
import * as crypto from "crypto";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {

  user: any = {}

  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) { }

  async validateUser(userEmail:string, password: string): Promise<any>{
    this.user = await this.userService.findByEmail(userEmail)

    password = crypto.createHmac('sha256', password).digest('hex')

    if(this.user && this.user.password === password){
      return this.user
    }

    return null
  }

  async login(user_email: any, user_password: any){
    const payload = { email: user_email, password: user_password}
    return {
      access_token: this.jwtService.sign(payload)
    }
  }
}
