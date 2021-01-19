/*
 * @Author: your name
 * @Date: 2021-01-19 22:03:54
 * @LastEditTime: 2021-01-19 22:10:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /nest-api/src/modules/users/dto/users.update.dto.ts
 */
import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserDTO {
  @ApiProperty({ description: '用户名' })
  readonly username: string;
  @ApiProperty({ description: '用户密码' })
  readonly password: string;
}