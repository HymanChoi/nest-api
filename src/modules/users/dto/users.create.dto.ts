import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDTO {
  @ApiProperty({ description: '用户ID' })
  id: number;
  @ApiProperty({ description: '用户名' })
  username: string;
  @ApiProperty({ description: '用户密码' })
  password: string;
}