/*
 * @Author: your name
 * @Date: 2021-01-18 21:38:15
 * @LastEditTime: 2021-01-19 22:09:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /nest-api/src/modules/users/dto/users.create.dto.ts
 */
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDTO {
  @ApiProperty({ description: '用户ID' })
  id: number;
  @ApiProperty({ description: '用户名' })
  username: string;
  @ApiProperty({ description: '用户密码' })
  password: string;
} 