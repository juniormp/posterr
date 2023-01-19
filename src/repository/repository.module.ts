import { Global, Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostRepository } from './post.repository';
import { UserRepository } from './user.repository';

@Module({
  providers: [UserRepository, PrismaService, PostRepository],
  exports: [UserRepository]
})
@Global()
export class RepositoryModule {}
