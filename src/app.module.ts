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
import { CaslModule } from './casl/casl.module';

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
      synchronize: true,
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
    CaslModule,
  ],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
