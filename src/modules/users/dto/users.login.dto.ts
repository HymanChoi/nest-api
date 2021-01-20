/*
 * @Author: Hyman Choi
 * @Date: 2021-01-19 15:23:50
 * @LastEditTime: 2021-01-19 16:30:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nest-api\src\modules\users\dto\users.login.dto.ts
 */
import { ApiBearerAuth, ApiProperty } from '@nestjs/swagger';

@ApiBearerAuth()
export class LoginUserDTO {
  @ApiProperty({ description: '用户名称' })
  readonly username: string;
  @ApiProperty({ description: '用户密码' })
  readonly password: string;
}
