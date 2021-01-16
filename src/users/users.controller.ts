import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersEntity } from '../entities/users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get('list')
  findAll(): Promise<UsersEntity[]> {
    return this.usersService.findAll();
  }
}
