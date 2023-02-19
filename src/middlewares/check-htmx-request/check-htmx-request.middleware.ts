import { Injectable, NestMiddleware, Req } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class CheckHtmxRequestMiddleware implements NestMiddleware {
  use(@Req() req: Request & { ctx?: any }, res: any, next: () => void) {
    if (req.headers['hx-request']) {
      if (req.ctx) {
        req.ctx = { layout: null, fromHTMX: true };
      } else {
        req.ctx = { ...req.ctx, layout: null, fromHTMX: true };
      }
    }
    // await new Promise(r => setTimeout(r, 2000));
    next();
  }
}
