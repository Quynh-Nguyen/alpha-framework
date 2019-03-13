import { Request, Response, NextFunction } from 'express';
import { ResponseTrait } from '../Traits';
declare class BaseRequest extends ResponseTrait {
    constructor();
    static validate(req: Request, res: Response, next: NextFunction): any;
}
export default BaseRequest;
