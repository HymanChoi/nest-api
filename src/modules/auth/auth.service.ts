/*
 * @Author: Hyman Choi
 * @Date: 2021-01-19 14:19:16
 * @LastEditTime: 2021-01-19 15:49:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nest-api\src\modules\auth\auth.service.ts
 */
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { encryptPassword } from '../../utils/cryptogram';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  // JWT验证 - Step 2: 校验用户信息
  async validateUser(username: string, password: string): Promise<any> {
    console.log('JWT验证 - Step 2: 校验用户信息');
    const user = await this.usersService.findOne(username);
    if (user) {
      const hashedPassword = user.password;
      const salt = user.salt;
      const hashPassword = encryptPassword(password, salt);
      if (hashedPassword === hashPassword) {
        return {
          code: 1,
          user,
        };
      } else {
        return {
          code: 2,
          user: null,
        };
      }
    }

    return {
      code: 3,
      user: null,
    };
  }

  // JWT验证 - Step 3: 处理 jwt 签证
  async certificate(user: any) {
    const payload = {
      username: user.username,
    };
    console.log('JWT验证 - Step 3: 处理 jwt 签证');
    try {
      const token = this.jwtService.sign(payload);
      return {
        code: 200,
        data: {
          token,
        },
        msg: `Login success`,
      };
    } catch (error) {
      return {
        code: 600,
        msg: `Incorrect username or password`,
      };
    }
  }
}
