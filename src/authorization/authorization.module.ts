import { Global, Module } from "@nestjs/common";
import { RoleGuard } from "./guards/role.guard";
import { JwtLocalStrategy } from "../auth/strategy/jwt.strategy";
import { UserModule } from "../user/user.module";

@Global()
@Module({
  imports: [UserModule],
  providers: [RoleGuard, JwtLocalStrategy],
  exports: [RoleGuard]
})
export class AuthorizationModule {}
