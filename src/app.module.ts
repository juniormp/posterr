import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { RepositoryModule } from './repository/repository.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { PostModule } from './post/post.module';
import { ShowsModule } from './shows/shows.module';

@Module({
  imports: [PrismaModule, UserModule, RepositoryModule, AuthModule, PostModule, ShowsModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ]
})
export class AppModule {}
