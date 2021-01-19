/*
 * @Author: your name
 * @Date: 2021-01-18 21:13:07
 * @LastEditTime: 2021-01-19 23:24:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /nest-api/src/modules/users/users.service.ts
 */
import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersEntity } from './users.entity';
import { CreateUserDTO } from './dto/users.create.dto';
import { UpdateUserDTO } from './dto/users.update.dto';
import { LoginUserDTO } from './dto/users.login.dto';
import { RegisterUserDTO } from './dto/users.register.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
  ) { }

  /**
   * 查找所有用户
   */
  async findAll(): Promise<UsersEntity[]> {
    return await this.usersRepository.query('select * from users');
  }

  /**
  * 查找单个用户
  */
  async findOne(username: string): Promise<any | undefined> {
    try {
      const user = await this.usersRepository.findOne(username);
      return user[0]
    } catch (error) {
      console.error(error);
      return void 0;
    }
  }

  /**
  * 添加单个用户
  */
  async addOne(body: CreateUserDTO): Promise<void> {
    const user = this.usersRepository.create(body);
    await this.usersRepository.save(user)
  }

  /**
  * 编辑单个用户
  */
  async editOne(id: string, body: UpdateUserDTO): Promise<void> {
    await this.usersRepository.update(id, body);
  }

  /**
  * 删除单个用户
  */
  async deleteOne(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  /**
  * 用户登录
  */
  async login(body: LoginUserDTO): Promise<any | undefined> {
    try {
      await this.usersRepository.delete(body);
    } catch (error) {
      return {
        code: 503,
        msg: `Service error: ${error}`,
      };
    }
  }

  /**
  * 用户注册
  */
  async register(body: RegisterUserDTO): Promise<any | undefined> {
    try {
      await this.usersRepository.delete(body);
    } catch (error) {
      return {
        code: 503,
        msg: `Service error: ${error}`,
      };
    }
  }
}
