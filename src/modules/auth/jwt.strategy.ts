/*
 * @Author: Hyman Choi
 * @Date: 2021-01-19 14:20:55
 * @LastEditTime: 2021-01-19 14:23:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nest-api\src\modules\auth\jwt.strategy.ts
 */
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  // JWT验证 - Step 4: 被守卫调用
  async validate(payload: any) {
    console.log(`JWT验证 - Step 4: 被守卫调用`);
    return { username: payload.username };
  }
}
