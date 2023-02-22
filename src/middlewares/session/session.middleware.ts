import { Injectable, NestMiddleware, Next, Req } from '@nestjs/common';
import { NextFunction, Request } from 'express';
import { FetchService } from 'src/common/fetch/fetch.service';

@Injectable()
export class PopulateUserSessionInContextMiddleware implements NestMiddleware {
  constructor(private fetchService: FetchService) {}
  use(@Req() req: Request, _: any, @Next() next: NextFunction) {
    const user = req.cookies?.session_user;
    const token = req.cookies?.session_token;
    if (req.session) {
      req.session.user = user ?? req.session?.user;
      req.session.token = token ?? req.session?.token;
      if (req.session?.user && req.session?.token) {
        this.fetchService.setHeader(
          'Authorization',
          `Bearer ${req.session.token}`,
        );
        req.ctx = {
          ...req.ctx,
          user: req.session.user,
          isAuthenticated: !!req.session.user,
        };
      }
    }
    next();
  }
}
