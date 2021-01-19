/*
 * @Author: your name
 * @Date: 2021-01-18 21:12:59
 * @LastEditTime: 2021-01-19 22:57:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /nest-api/src/modules/users/users.controller.ts
 */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put
} from '@nestjs/common';
import { CreateUserDTO } from './dto/users.create.dto';
import { UpdateUserDTO } from './dto/users.update.dto';
import { LoginUserDTO } from './dto/users.login.dto';
import { RegisterUserDTO } from './dto/users.register.dto';
import { UsersService } from './users.service';
import { UsersEntity } from './users.entity';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('用户')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  // GET /users/users
  @Get('users')
  @ApiOperation({ summary: '搜索所有用户' })
  async findAll(): Promise<UsersEntity[]> {
    return await this.usersService.findAll()
  }

  // GET /users/:username
  @Get(':username')
  @ApiOperation({ summary: '搜索单个用户' })
  async findOne(@Param('username') username: string): Promise<UsersEntity> {
    return await this.usersService.findOne(username)
  }

  // POST /users
  @Post()
  @ApiOperation({ summary: '新增单个用户' })
  async addOne(@Body() body: CreateUserDTO): Promise<void> {
    return await this.usersService.addOne(body);
  }

  // PUT /users/:id
  @Put(':id')
  @ApiOperation({ summary: '修改单个用户' })
  async editOne(
    @Param('id') id: string,
    @Body() body: UpdateUserDTO
  ): Promise<void> {
    return await this.usersService.editOne(id, body);
  }

  // DELETE /users/:id
  @Delete(':id')
  @ApiOperation({ summary: '删除单个用户' })
  async deleteOne(@Param('id') id: string): Promise<void> {
    return await this.usersService.deleteOne(id);
  }

  // POST /users
  @Post()
  @ApiOperation({ summary: '用户登录' })
  async login(@Body() body: LoginUserDTO): Promise<void> {
    return await this.usersService.login(body);
  }

  // POST /users
  @Post()
  @ApiOperation({ summary: '用户注册' })
  async register(@Body() body: RegisterUserDTO): Promise<void> {
    return await this.usersService.register(body);
  }
}
