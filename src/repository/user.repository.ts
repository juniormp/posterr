import { Global, Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';
import { User } from '../user/entities/user.entity';

@Injectable()
@Global()
export class UserRepository {

    constructor(private prisma: PrismaService) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        return new User(await this.prisma.users.create({
            data: { 
                name: createUserDto.name,
                password: await hash(createUserDto.password, 10),
                email: createUserDto.email,
                confirmed: createUserDto.confirmed,
                canceled: createUserDto.canceled,
                typeId: createUserDto.typeId,
                countryId: createUserDto.countryId,
                registrationDate: new Date() 
            }
          }))
    }

    async findAll(skip?: number, take: number = 0, search?: string): Promise<User[]>{
        if(isNaN(skip) && isNaN(take)){
            return (await this.prisma.users.findMany()).map((user) => new User(user));;
        } else {
            return (await this.prisma.users.findMany({ 
                skip, 
                take,
                where: {
                    name: {
                        contains: search
                    }
                }
            })).map((user) => new User(user));;
        } 
    }

    async find(id: string): Promise<User> {
        return new User(await this.prisma.users.findUnique({
            where: { id }
        }));
    }

    async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
        return new User(await this.prisma.users.update({
          where: { id },
          data: {
            ...updateUserDto
          }
        }))
    }

    async remove(id: string): Promise<User> {
        return new User(await this.prisma.users.delete({
          where: { id }
        }))
    }

    async findByEmail(email: string) {
        return new User(
            await this.prisma.users.findFirst({
                where: { email }
            })
        )
    }
}
