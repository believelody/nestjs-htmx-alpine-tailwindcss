import { Injectable } from '@nestjs/common';
import { FetchService } from 'src/common/fetch/fetch.service';
import {
  PostsBuilderResponse,
  PostsResponse,
} from 'src/common/post/post.interface';
import postUtil from 'src/utils/post.util';
import { CreatePosts1Dto } from './dto/create-posts-1.dto';
import { UpdatePosts1Dto } from './dto/update-posts-1.dto';

@Injectable()
export class Posts1Service {
  constructor(private fetchService: FetchService) {}

  create(createPosts1Dto: CreatePosts1Dto) {
    return 'This action adds a new posts1';
  }

  async findAll(
    limit: number,
    skip: number,
    detailBaseURL: string,
  ): Promise<PostsBuilderResponse> {
    const res = (await this.fetchService.get(
      `/posts?limit=${limit}&skip=${skip}`,
    )) as PostsResponse;
    const posts = postUtil.constructPosts(res.posts, detailBaseURL);
    return { posts, total: res.total };
  }

  findOne(id: number) {
    return `This action returns a #${id} posts1`;
  }

  update(id: number, updatePosts1Dto: UpdatePosts1Dto) {
    return `This action updates a #${id} posts1`;
  }

  remove(id: number) {
    return `This action removes a #${id} posts1`;
  }
}
