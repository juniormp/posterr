import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, UseFilters, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { FindAllUsersDto } from './dto/find-all-users.dto';
import { PrismaClientExceptionFilter } from '../prisma-client-exception/prisma-client-exception.filter';
import { IsPublic } from '../auth/decorator/is-public.decorator';

@Controller('user')
@UseFilters(PrismaClientExceptionFilter)
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @IsPublic()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.userService.create(createUserDto);
  }

  @Get()
  async findAll(@Query() query: FindAllUsersDto): Promise<User[]> {
    return await this.userService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
