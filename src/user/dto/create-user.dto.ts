import { ClassSerializerInterceptor, UseInterceptors } from "@nestjs/common"
import { ApiProperty } from "@nestjs/swagger"
import { Transform } from "class-transformer"
import { IsBoolean, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator"
import { hash } from 'bcrypt';
import { User } from "../entities/user.entity";

@UseInterceptors(ClassSerializerInterceptor)
export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @ApiProperty()
    @Transform(({ value }) => value.toUpperCase())
    name: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    @MinLength(6)
    password: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    @MinLength(3)
    email: string

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty()
    confirmed: boolean

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty({default: false})
    canceled: boolean

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    typeId: number

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    countryId: number

    constructor(partial: Partial<User>) {
        Object.assign(this, partial)
    }
}
