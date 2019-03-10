import { ResponseTraitType } from '../Types';
import { Response } from 'express';
declare class ResponseTrait {
    constructor();
}
interface ResponseTrait {
    success(res: Response, data: any): any;
    successData(data: any): ResponseTraitType;
    error(res: Response, message: any, statusCode: number): void;
    errorData(message: any): ResponseTraitType;
    notFound(res: Response): any;
    unauthenticated(res: Response): void;
    unauthorized(res: Response): void;
    badRequest(res: Response): void;
    accepted(res: Response, data: any): void;
}
export default ResponseTrait;
