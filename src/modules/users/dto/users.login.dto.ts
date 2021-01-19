/*
 * @Author: your name
 * @Date: 2021-01-19 22:03:54
 * @LastEditTime: 2021-01-19 22:20:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /nest-api/src/modules/users/dto/users.login.dto.ts
 */
import { ApiProperty } from "@nestjs/swagger";

export class LoginUserDTO {
  @ApiProperty({ description: '用户名' })
  readonly username: string;
  @ApiProperty({ description: '用户密码' })
  readonly password: string;
}