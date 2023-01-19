import { Global, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PostRepository {

    constructor(private prisma: PrismaService) {}

    async findAll() {
        return this.prisma.posts.findMany({
            include: {
                users: true
            }
        })
    }
}
