import { Request, Response, NextFunction } from 'express';
import { ExpressResponseTrait } from '../Traits';
declare class BaseRequest extends ExpressResponseTrait {
    constructor();
    static validate(req: Request, res: Response, next: NextFunction): any;
}
export default BaseRequest;
