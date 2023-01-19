import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { FindAllUsersDto } from './dto/find-all-users.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(private userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.create(createUserDto);
  }

  async findAll(query: FindAllUsersDto): Promise<User[]> {
    const users = await this.userRepository.findAll(+query.skip, +query.take, query.search);    
    return users;
  }

  async findOne(id: string): Promise<User> {
    return await this.userRepository.find(id);
  } 

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return await this.userRepository.update(id, updateUserDto);
  }

  async remove(id: string) {
    return await this.userRepository.remove(id);
  }
}
