import { ResponseTraitType } from '../Types';
import { Response } from 'express';
declare class ResponseTrait {
    constructor();
    static successData: (data: any) => ResponseTraitType;
    static success: (res: Response, data: any) => import("express-serve-static-core").Response;
    static errorData: (message: any) => ResponseTraitType;
    static error: (res: Response, message: any, statusCode: number) => import("express-serve-static-core").Response;
    static notFound: (res: Response) => import("express-serve-static-core").Response;
    static unauthenticated: (res: Response) => import("express-serve-static-core").Response;
    static unauthorized: (res: Response) => import("express-serve-static-core").Response;
    static badRequest: (res: Response) => import("express-serve-static-core").Response;
    static accepted: (res: Response, data: any) => import("express-serve-static-core").Response;
}
export default ResponseTrait;
