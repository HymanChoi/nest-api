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
import { UsersService } from './users.service';
import { UsersEntity } from './users.entity';

interface UsersResponse<T = unknown> {
  code: number;
  data?: T;
  message: string;
}

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  // GET /users/users
  @Get('users')
  async findAll(): Promise<UsersResponse<UsersEntity[]>> {
    return {
      code: 200,
      data: await this.usersService.findAll(),
      message: 'Success.'
    };
  }

  // GET /users/:id
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UsersResponse<UsersEntity>> {
    return {
      code: 200,
      data: await this.usersService.findOne(id),
      message: 'Success.'
    };
  }

  // POST /users
  @Post()
  async addOne(@Body() body: CreateUserDTO): Promise<UsersResponse> {
    await this.usersService.addOne(body);
    return {
      code: 200,
      data: body,
      message: 'Success.'
    };
  }

  // PUT /users/:id
  @Put(':id')
  async editOne(
    @Param('id') id: string,
    @Body() body: UpdateUserDTO
  ): Promise<UsersResponse> {
    await this.usersService.editOne(id, body);
    return {
      code: 200,
      message: 'Success.'
    };
  }

  // DELETE /users/:id
  @Delete(':id')
  async deleteOne(@Param('id') id: string): Promise<UsersResponse> {
    await this.usersService.deleteOne(id);
    return {
      code: 200,
      message: 'Success.'
    };
  }
}
