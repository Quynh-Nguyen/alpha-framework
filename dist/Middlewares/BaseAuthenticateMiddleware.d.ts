import { Request, Response, NextFunction } from 'express';
import { ResponseTrait } from '../Traits';
export declare class BaseAuthenticateMiddleware extends ResponseTrait {
    constructor();
    handle(req: Request, res: Response, next: NextFunction): any;
}
