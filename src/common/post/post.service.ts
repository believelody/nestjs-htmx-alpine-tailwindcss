import { Injectable } from '@nestjs/common';
import { Author } from 'src/users/users.interface';
import { UsersService } from 'src/users/users.service';
import postUtil from 'src/utils/post.util';
import { CommentResponse } from '../comment/comment.interface';
import { FetchService } from '../fetch/fetch.service';
import {
  Post,
  PostResponse,
  PostsBuilderResponse,
  PostsResponse,
} from './post.interface';

@Injectable()
export class PostsService {
  constructor(
    private fetchService: FetchService,
    private usersService: UsersService,
  ) {}

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

  async findOne(id: number): Promise<PostResponse> {
    const post = (await this.fetchService.get(`/posts/${id}`)) as Post;
    const prevPost = (await this.fetchService.get(
      `/posts/${id - 1}?select=id`,
    )) as Post;
    const nextPost = (await this.fetchService.get(
      `/posts/${id + 1}?select=id`,
    )) as Post;
    const author = (await this.usersService.findAuthor(post.userId)) as Author;
    delete post.userId;

    return { post, prevPost, nextPost, author };
  }

  async findPostComments(id: number): Promise<CommentResponse> {
    return await this.fetchService.get(`/comments/post/${id}`);
  }
}
