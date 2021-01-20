/*
 * @Author: Hyman Choi
 * @Date: 2021-01-18 14:21:18
 * @LastEditTime: 2021-01-18 17:11:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nest-api\src\modules\users\dto\users.update.dto.ts
 */
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDTO {
  @ApiProperty({ description: '用户名称' })
  readonly username: string;
  @ApiProperty({ description: '用户密码' })
  readonly password: string;
}
