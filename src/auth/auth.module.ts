import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { UserModule } from "../user/user.module";
import { PassportModule } from "@nestjs/passport";
import { AuthLocalStrategy } from "./strategy/local.strategy";
import { AuthController } from './controller/auth.controller';
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants/constants";
import { JwtLocalStrategy } from "./strategy/jwt.strategy";

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [AuthService, AuthLocalStrategy, JwtLocalStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
