import { Response, NextFunction } from 'express';
import { ExpressResponseTrait } from '../Traits';
declare class BaseAuthenticateMiddleware extends ExpressResponseTrait {
    constructor();
    static handle({}: {}, res: Response, next: NextFunction): any;
}
export default BaseAuthenticateMiddleware;
