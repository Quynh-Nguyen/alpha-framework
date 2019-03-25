import { validationResult } from 'express-validator/check';
import { Request, Response, NextFunction } from 'express';

import { ExpressResponseTrait } from '../Traits';

const { error } = ExpressResponseTrait;

class BaseRequest extends ExpressResponseTrait {
  constructor() {
    super();
  }

  public static validate(req: Request, res: Response, next: NextFunction): any {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    return error(res, errors.mapped(), 400);
  }
}

export default BaseRequest;
