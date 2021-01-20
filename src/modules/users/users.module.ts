/*
 * @Author: Hyman Choi
 * @Date: 2021-01-18 14:20:07
 * @LastEditTime: 2021-01-19 15:16:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nest-api\src\modules\users\users.module.ts
 */
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
