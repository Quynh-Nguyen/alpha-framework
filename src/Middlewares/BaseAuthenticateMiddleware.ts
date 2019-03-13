import { Response, NextFunction } from 'express';

import { ResponseTrait } from '../Traits';

class BaseAuthenticateMiddleware extends ResponseTrait {
  constructor() {
    super();
  }

  //@TODO: Initialize Watch Log Service

  public static handle({}, res: Response, next: NextFunction): any {
    try {
      //@TODO: Call to User service for checking authentication
      
      return next();
    } catch (e) {
      return this.error(res, 'Testing', e.code);
    }
  }
}

export default BaseAuthenticateMiddleware;
