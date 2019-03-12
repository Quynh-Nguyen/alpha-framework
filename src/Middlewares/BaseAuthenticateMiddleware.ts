import { Request, Response, NextFunction } from 'express';

import { ResponseTrait } from '../Traits';

export class BaseAuthenticateMiddleware extends ResponseTrait {
  constructor() {
    super();
  }

  //@TODO: Initialize Watch Log Service

  public handle(req: Request, res: Response, next: NextFunction): any {
    try {
      console.log(req.body);
      
      return next();
    } catch (e) {
      this.error(res, 'Testing', e.code);
    }
  }
}