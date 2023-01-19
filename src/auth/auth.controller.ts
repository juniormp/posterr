import { Controller, HttpCode, HttpStatus, Post, UseGuards, Request, Get } from '@nestjs/common';
import { UserRepository } from 'src/repository/user.repository';
import { User } from 'src/user/entities/user.entity';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorator/current-user.decorator';
import { IsPublic } from './decorator/is-public.decorator';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthRequest } from './models/auth-request.model';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @Post('login')
  @IsPublic()
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  login(@Request() req: AuthRequest) {
    return this.authService.login(req.user)
  }

  @Get('me')
  getMe(@CurrentUser() user: User) {
    return user
  }
}
