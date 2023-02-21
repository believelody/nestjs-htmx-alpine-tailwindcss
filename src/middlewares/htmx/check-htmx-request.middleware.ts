import { Injectable, NestMiddleware, Next, Req, Res } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class CheckHtmxRequestMiddleware implements NestMiddleware {
  use(req: Request, @Res() res: Response, @Next() next: NextFunction) {
    if (req.headers['hx-request']) {
      if (!req.ctx) {
        req.ctx = { layout: null, fromHTMX: true };
      } else {
        req.ctx = { ...req.ctx, layout: null, fromHTMX: true };
      }
    }
    // await new Promise(r => setTimeout(r, 2000));
    next();
  }
}
