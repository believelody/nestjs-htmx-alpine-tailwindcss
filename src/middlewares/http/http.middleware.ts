import { Injectable, NestMiddleware, Next, Req, Res } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import errorUtil from 'src/utils/error.util';
import queryUtil from 'src/utils/query.util';

@Injectable()
export class LimitQueryValidatorMiddleware implements NestMiddleware {
  use(@Req() req: Request, @Res() res: Response, @Next() next: NextFunction) {
    if (
      req.query.limit &&
      !queryUtil.limitQueryArray.includes(Number(req.query.limit))
    ) {
      if (req?.ctx?.fromHTMX) {
        throw new Error('There is a problem with limit value');
      }
      if (req.ctx) {
        req.ctx.error = errorUtil.code500;
      }
      res.statusCode = 500;
    }
    next();
  }
}
