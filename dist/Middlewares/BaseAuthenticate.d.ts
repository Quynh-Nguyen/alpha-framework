import { Request, Response, NextFunction } from 'express';
import { ExpressMiddlewareInterface } from 'routing-controllers';
import { ResponseTrait } from '../Traits';
export declare class BaseAuthenticateMiddleware extends ResponseTrait implements ExpressMiddlewareInterface {
    constructor();
    use(req: Request, res: Response, next: NextFunction): any;
}
