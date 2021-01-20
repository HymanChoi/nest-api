/*
 * @Author: Hyman Choi
 * @Date: 2021-01-18 14:20:13
 * @LastEditTime: 2021-01-19 16:31:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nest-api\src\modules\users\users.controller.ts
 */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';
import { AuthService } from '../auth/auth.service';
import { UsersEntity } from './users.entity';
import { CreateUserDTO } from './dto/users.create.dto';
import { LoginUserDTO } from './dto/users.login.dto';
import { RegisterUserDTO } from './dto/users.register.dto';
import { UpdateUserDTO } from './dto/users.update.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('用户')
@Controller('users')
export class UsersController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  // GET /users/all
  @UseGuards(AuthGuard('jwt'))
  @Get('all')
  @ApiOperation({ summary: '搜索所有用户' })
  async findAll(): Promise<UsersEntity[]> {
    return await this.usersService.findAll();
  }

  // GET /users/:username
  @Get(':username')
  @ApiOperation({ summary: '搜索单个用户' })
  async findOne(@Param('username') username: string): Promise<UsersEntity> {
    return await this.usersService.findOne(username);
  }

  // POST /users
  @Post()
  @ApiOperation({ summary: '添加单个用户' })
  async addOne(@Body() body: CreateUserDTO): Promise<void> {
    return await this.usersService.addOne(body);
  }

  // PUT /users/:id
  @Put(':id')
  @ApiOperation({ summary: '编辑单个用户' })
  async editOne(
    @Param('id') id: string,
    @Body() body: UpdateUserDTO,
  ): Promise<void> {
    return await this.usersService.editOne(id, body);
  }

  // DELETE /users/:id
  @Delete(':id')
  @ApiOperation({ summary: '删除单个用户' })
  async deleteOne(@Param('id') id: string): Promise<void> {
    return await this.usersService.remove(id);
  }

  // JWT验证 - Step 1: 用户请求登录
  @Post('login')
  async login(@Body() body: LoginUserDTO) {
    console.log('JWT验证 - Step 1: 用户请求登录');
    const authResult = await this.authService.validateUser(
      body.username,
      body.password,
    );
    switch (authResult.code) {
      case 1:
        return this.authService.certificate(authResult.user);
      case 2:
        return {
          code: 600,
          msg: `Incorrect username or password`,
        };
      default:
        return {
          code: 600,
          msg: `The user is not registered`,
        };
    }
  }

  // POST /users/register
  @Post('register')
  @ApiOperation({ summary: '注册用户' })
  async register(@Body() body: RegisterUserDTO) {
    return await this.usersService.register(body);
  }
}
