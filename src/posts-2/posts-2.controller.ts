import { Controller, Get, Render, Req } from '@nestjs/common';
import { Request } from 'express';
import { PostsService } from 'src/common/post/post.service';
import queryUtil from 'src/utils/query.util';
import urlUtil from 'src/utils/url.util';

@Controller('posts-2')
export class Posts2Controller {
  title = 'Posts with input pagination';
  constructor(private readonly postsService: PostsService) {}

  @Get()
  @Render('pages/posts-2')
  async findAll(@Req() req: Request) {
    const limit = Number(req.query.limit || queryUtil.limitQueryArray[0]);
    const page = Number(req.query.page) || 1;
    const { posts, total } = await this.postsService.findAll(
      limit,
      limit * (page - 1),
      'posts-2',
    );
    return {
      ...req.ctx,
      posts,
      meta: { pages: Math.round(total / limit), page, limit, total },
      title: this.title,
    };
  }

  @Get(':id')
  @Render('pages/posts-2/id')
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
            '/posts-2',
          ),
          prev: prevPost.id && `/posts-2/${prevPost.id}`,
          next: nextPost.id && `/posts-2/${nextPost.id}`,
        },
      },
      author,
      title: post.title,
    };
  }
}
