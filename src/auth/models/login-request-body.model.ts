import { Injectable } from '@nestjs/common';
import { IsEmail, IsString } from 'class-validator';

@Injectable()
export class LoginRequestBody {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}