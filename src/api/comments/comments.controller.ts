import { Controller, Get, Render, Req } from '@nestjs/common';
import { Request } from 'express';
import { PostsService } from 'src/common/post/post.service';

@Controller('comments')
export class ApiCommentsController {
  constructor(private postsService: PostsService) {}

  @Get('post/:id')
  @Render('partials/comment/list')
  async findAll(@Req() req: Request) {
    const { comments, total, limit } = await this.postsService.findPostComments(
      Number(req.params.id),
    );
    return {
      ...req.ctx,
      postId: req.params.id,
      comments,
      meta: { total, limit },
    };
  }
}
