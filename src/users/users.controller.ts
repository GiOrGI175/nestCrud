import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create() {
    return;
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id) {
    return;
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return this.usersService.remove(+id);
  }
}
