import { Controller, Post, Req, UseGuards } from "@nestjs/common";
import { RequestWithUserDto } from "../dto/request-with-user.dto";
import { AuthService } from "../services/auth.service";
import { LocalAuthGuard } from "../guards/local-auth.guard";

@Controller('auth')
export class AuthController {

  constructor(
    private authService: AuthService
  ) {  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() request: RequestWithUserDto){
    const email = request.user.email
    const password = request.user.password
    return this.authService.login(email, password)
  }
}
