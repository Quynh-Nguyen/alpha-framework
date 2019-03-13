import { Request, Response, NextFunction } from 'express';

import { ResponseTrait } from '../Traits';

class BaseAuthenticateMiddleware extends ResponseTrait {
  constructor() {
    super();
  }

  //@TODO: Initialize Watch Log Service

  public static handle(req: Request, res: Response, next: NextFunction): any {
    try {
      console.log(req.body);
      
      return next();
    } catch (e) {
      return this.error(res, 'Testing', e.code);
    }
  }
}

export default BaseAuthenticateMiddleware;
