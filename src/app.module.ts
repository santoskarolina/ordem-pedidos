import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { UserModule } from './user/user.module';
import { AddressModule } from './address/address.module';
import { CityModule } from './city/city.module';
import { StateModule } from './state/state.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderItemModule } from './order-item/order-item.module';
import { CartModule } from './cart/cart.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { JwtLocalGuard } from "./auth/guards/jwt-auth.guard";
import { RoleGuard } from "./authorization/guards/role.guard";
import { APP_GUARD } from "@nestjs/core";
import { AuthorizationModule } from './authorization/authorization.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'shopping',
      entities: ["dist/**/*.entity{.ts,.js}"],
      migrations: ["src/db/migrations/*.ts"],
      migrationsTableName: 'shopping_order.migrations',
      cli: {
        migrationsDir: 'src/db/migrations',
      },
      synchronize: false,
    }),
    ProductModule,
    CategoryModule,
    UserModule,
    AddressModule,
    CityModule,
    StateModule,
    OrderItemModule,
    CartModule,
    AuthModule,
    ProfileModule,
    AuthorizationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
