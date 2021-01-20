/*
 * @Author: Hyman Choi
 * @Date: 2021-01-18 12:25:40
 * @LastEditTime: 2021-01-19 15:15:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nest-api\src\app.module.ts
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// 子模块
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersController } from './modules/users/users.controller';

import db from './config/database';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: db.mysql.host,
      port: db.mysql.port,
      username: db.mysql.user,
      password: db.mysql.password,
      database: db.mysql.database,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [UsersController],
  providers: [],
})
export class AppModule {}
