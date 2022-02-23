import { Module } from '@nestjs/common';
import { ProfileService } from './services/profile.service';
import { ProfileController } from './controller/profile.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Profile } from "./entities/profile.entity";

@Module({
  imports:  [TypeOrmModule.forFeature([Profile])],
  controllers: [ProfileController],
  providers: [ProfileService]
})
export class ProfileModule {}
