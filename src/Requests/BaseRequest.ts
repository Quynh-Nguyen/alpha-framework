import { validationResult } from 'express-validator/check';
import { Request, Response, NextFunction } from 'express';

import { ResponseTrait } from '../Traits';

class BaseRequest extends ResponseTrait {
  constructor() {
    super();
  }

  public static validate(req: Request, res: Response, next: NextFunction): any {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    return this.error(res, errors.mapped(), 400);
  }
}

export default BaseRequest;
