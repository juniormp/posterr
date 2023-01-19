import { Injectable } from '@nestjs/common';
import { PostRepository } from 'src/repository/post.repository';

@Injectable()
export class PostService {

    constructor(private readonly postRepository: PostRepository) {}

    findAll() {
        return this.postRepository.findAll()
    }
}
