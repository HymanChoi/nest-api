/*
 * @Author: your name
 * @Date: 2021-01-19 22:03:54
 * @LastEditTime: 2021-01-19 22:21:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /nest-api/src/modules/users/dto/users.register.dto.ts
 */
import { ApiProperty } from "@nestjs/swagger";

export class RegisterUserDTO {
  @ApiProperty({ description: '用户名' })
  readonly username: string;
  @ApiProperty({ description: '用户密码' })
  readonly password: string;
  @ApiProperty({ description: '验证密码' })
  readonly verifyPassword: string;
}