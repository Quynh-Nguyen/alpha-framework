import { Request, Response, NextFunction } from 'express';
import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers';

import { ResponseTrait } from '../Traits';

@Middleware({type: 'before'})
export class BaseAuthenticateMiddleware extends ResponseTrait implements ExpressMiddlewareInterface {
  constructor() {
    super();
  }

  //@TODO: Initialize Watch Log Service

  public use(req: Request, res: Response, next: NextFunction): any {
    try {
      console.log(req.body);
      
      return next();
    } catch (e) {
      this.error(res, 'Testing', e.code);
    }
  }
}