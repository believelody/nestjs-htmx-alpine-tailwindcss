import { Controller, Get, Render, Req } from '@nestjs/common';
import { Request } from 'express';
import queryUtil from 'src/utils/query.util';
import urlUtil from 'src/utils/url.util';
import { PostsService } from 'src/common/post/post.service';

@Controller('posts-1')
export class Posts1Controller {
  title = 'Posts with select pagination';
  constructor(private readonly postsService: PostsService) {}

  @Get()
  @Render('pages/posts-1')
  async findAll(@Req() req: Request) {
    const limit = Number(req.query.limit || queryUtil.limitQueryArray[0]);
    const page = Number(req.query.page) || 1;
    const { posts, total } = await this.postsService.findAll(
      limit,
      limit * (page - 1),
      'posts-1',
    );
    return {
      ...req.ctx,
      posts,
      meta: { pages: Math.round(total / limit), page, limit, total },
      title: this.title,
    };
  }

  @Get(':id')
  @Render('pages/posts-1/id')
  async findOne(@Req() req: Request) {
    const id = Number(req.params.id);
    const { post, prevPost, nextPost, author } =
      await this.postsService.findOne(id);
    const user = req.session?.user;
    const liked = user?.likedPosts?.includes(Number(id));
    return {
      ...req.ctx,
      post: {
        ...post,
        liked,
        reactions: liked ? ++post.reactions : post.reactions,
        url: {
          back: urlUtil.retrieveAppropriateBackUrl(
            req.headers['hx-current-url'] as string,
            '/posts-1',
          ),
          prev: prevPost.id && `/posts-1/${prevPost.id}`,
          next: nextPost.id && `/posts-1/${nextPost.id}`,
        },
      },
      author,
      title: post.title,
    };
  }
}
