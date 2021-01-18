import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersEntity } from './users.entity';

import { CreateUserDTO } from './dto/users.create.dto';
import { UpdateUserDTO } from './dto/users.update.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
  ) { }

  // 查找所有用户
  async findAll(): Promise<UsersEntity[]> {
    return await this.usersRepository.query('select * from users');
  }

  // 查找单个用户
  async findOne(id: string): Promise<UsersEntity> {
    return await this.usersRepository.findOne(id);
  }

  // 添加单个用户
  async addOne(body: CreateUserDTO): Promise<void> {
    const user = this.usersRepository.create(body);
    await this.usersRepository.save(user)
  }

  // 编辑单个用户
  async editOne(id: string, body: UpdateUserDTO): Promise<void> {
    await this.usersRepository.update(id, body);
  }

  // 删除单个用户
  async deleteOne(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
