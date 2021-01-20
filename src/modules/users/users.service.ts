/*
 * @Author: Hyman Choi
 * @Date: 2021-01-18 14:20:20
 * @LastEditTime: 2021-01-19 15:57:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nest-api\src\modules\users\users.service.ts
 */
import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersEntity } from './users.entity';

import { CreateUserDTO } from './dto/users.create.dto';
import { RegisterUserDTO } from './dto/users.register.dto';
import { UpdateUserDTO } from './dto/users.update.dto';
// 引入加密函数
import { makeSalt, encryptPassword } from '../../utils/cryptogram';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
  ) {}

  /**
   * 查找所有用户
   */
  async findAll(): Promise<any | undefined> {
    const sql = `SELECT * FROM users`;
    try {
      const result = await this.usersRepository.query(sql);
      let list = [];
      result.forEach((item: { id: number; username: string }) => {
        list.push({
          id: item.id,
          username: item.username,
        });
      });
      return {
        code: 200,
        data: {
          list,
        },
        msg: 'Success',
      };
    } catch (error) {
      return {
        code: 503,
        msg: `Service error: ${error}`,
      };
    }
  }

  /**
   * 查找单个用户
   *
   * @param username 用户名称
   */
  async findOne(username: string): Promise<any | undefined> {
    const sql = `SELECT * FROM users WHERE username = '${username}'`;
    try {
      const user = await this.usersRepository.query(sql);
      return user[0];
    } catch (error) {
      console.error(error);
      return void 0;
    }
  }

  /**
   * 添加单个用户
   *
   * @param body 请求体
   */
  async addOne(body: CreateUserDTO): Promise<any | undefined> {
    const user = this.usersRepository.create(body);
    try {
      await this.usersRepository.save(user);
      return {
        code: 200,
        msg: 'Success',
      };
    } catch (error) {
      return {
        code: 503,
        msg: `Service error: ${error}`,
      };
    }
  }

  /**
   * 编辑单个用户
   *
   * @param id 用户ID
   * @param body 请求体
   */
  async editOne(id: string, body: UpdateUserDTO): Promise<any | undefined> {
    try {
      await this.usersRepository.update(id, body);
      return {
        code: 200,
        msg: 'Success',
      };
    } catch (error) {
      return {
        code: 503,
        msg: `Service error: ${error}`,
      };
    }
  }

  /**
   * 删除单个用户
   *
   * @param id 用户ID
   */
  async remove(id: string): Promise<any | undefined> {
    const sql = `DELETE FROM users WHERE id = '${id}'`;
    await this.usersRepository.query(sql);
    try {
      return {
        code: 200,
        msg: 'Success',
      };
    } catch (error) {
      return {
        code: 503,
        msg: `Service error: ${error}`,
      };
    }
  }

  /**
   * 注册用户
   *
   * @param body 请求体
   */
  async register(body: RegisterUserDTO): Promise<any | undefined> {
    const { username, password, verifyPassword } = body;
    if (password !== verifyPassword) {
      return {
        code: 400,
        msg: 'The two passwords are inconsistent',
      };
    }

    const user = await this.findOne(username);
    if (user) {
      return {
        code: 400,
        msg: 'The user already exists',
      };
    }

    const salt = makeSalt(); // 制作密码盐
    const hashPwd = encryptPassword(password, salt); // 加密密码
    const item = {
      username: username,
      password: hashPwd,
      salt: salt,
    };
    try {
      await this.usersRepository.insert(item);
      return {
        code: 200,
        msg: 'Success',
      };
    } catch (error) {
      return {
        code: 503,
        msg: `Service error: ${error}`,
      };
    }
  }
}
