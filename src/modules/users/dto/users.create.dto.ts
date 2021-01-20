/*
 * @Author: Hyman Choi
 * @Date: 2021-01-19 10:15:08
 * @LastEditTime: 2021-01-19 10:26:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nest-api\src\modules\users\dto\users.create.dto.ts
 */
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO {
  @ApiProperty({ description: '用户ID' })
  readonly id: number;
  @ApiProperty({ description: '用户名称' })
  readonly username: string;
  @ApiProperty({ description: '用户密码' })
  readonly password: string;
}
