import { CanActivate, ExecutionContext, Injectable, mixin, Type } from "@nestjs/common";
import { RequestWithUserDto } from "../dto/request-with-user.dto";
import { Role } from "../../user/entities/role.entity";
import { AuthGuard } from "@nestjs/passport";
import { UserService } from "../../user/services/user.service";
import { JwtLocalGuard } from "./jwt-auth.guard";
import { Reflector } from "@nestjs/core";
import { ROLES_KEY } from "../decorator/role.decorator";

// export const RoleGuard = (role: Role): Type<CanActivate> => {
//   class RoleGuardMixin extends AuthGuard('jwt') {
//
//     constructor(
//       private userService: UserService
//     ) {
//       super();
//     }
//     async canActivate(context: ExecutionContext) {
//       await super.canActivate(context);
//
//       const serice = UserService
//
//       const request = context.switchToHttp().getRequest<RequestWithUserDto>();
//       const user = request.user;
//       const userWithRole = await this.userService.findUserWithRole(user.email)
//       console.log(userWithRole)
//
//       return userWithRole.includes(role);
//     }
//   }
//
//   return mixin(RoleGuardMixin);
// }

// export default RoleGuard;

@Injectable()
export class RoleGuard extends JwtLocalGuard implements CanActivate {

  constructor(private reflector: Reflector, private userService: UserService) {
    super()
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    await super.canActivate(context);

    const requiredPermissions = this.reflector.get<Role[]>(ROLES_KEY, context.getHandler()) || []; //perfil exigida na requisicao

    if (!requiredPermissions) {
      return true;
    }
    const request = context.switchToHttp().getRequest<RequestWithUserDto>();
    const user = request.user;
    const userWithRole = await this.userService.findUserWithRole(user.email)

    console.log(userWithRole)
    // return requiredRoles.some((role) => user.roles?.includes(role));
    return requiredPermissions.every((role) => userWithRole.includes(role));
  }
}
