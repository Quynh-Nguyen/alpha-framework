import { validationResult } from 'express-validator/check';

// import { ResponseTrait } from '../Traits';

class BaseRequest {
  public static validate(req: any, res: any, next: any): void {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    return res.json(
      // ResponseTrait.error(
      //   String(errors.mapped()), 400
      // )
    );
  }
}

export default BaseRequest;
