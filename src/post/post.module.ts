import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { PostRepository } from 'src/repository/post.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PostController],
  providers: [PostService, PostRepository, PrismaService]
})
export class PostModule {}
