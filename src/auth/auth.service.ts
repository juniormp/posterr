import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/repository/user.repository';
import { User } from 'src/user/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { UserPayload } from './models/user-payload.model';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './models/user-token.model';

@Injectable()
export class AuthService {

    constructor(
        private readonly userRepository: UserRepository,
        private readonly jwtService: JwtService
    ) {}

    async login(user: User): Promise<UserToken> {
        const payload: UserPayload = {
            sub: user.id,
            email: user.email,
            name: user.name
        }

        const jwtToken = this.jwtService.sign(payload)

        return {
            access_token: jwtToken
        }
    }

    async validateUser(email: string, password: string) {
        const user: User = await this.userRepository.findByEmail(email)

        if(user) {
          const isPasswordValue: boolean = await bcrypt.compare(password, user.password)
          if(isPasswordValue) {
            return user
          }
        }
    
        throw new Error('Email or password provided is incorrect')
    }
}
