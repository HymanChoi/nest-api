/*
 * @Author: Hyman Choi
 * @Date: 2021-01-19 09:03:02
 * @LastEditTime: 2021-01-19 13:53:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nest-api\src\modules\users\dto\users.register.dto.ts
 */
import { ApiProperty } from '@nestjs/swagger';

export class RegisterUserDTO {
  @ApiProperty({ description: '用户名称' })
  readonly username: string;
  @ApiProperty({ description: '用户密码' })
  readonly password: string;
  @ApiProperty({ description: '校验密码' })
  readonly verifyPassword: string;
}
