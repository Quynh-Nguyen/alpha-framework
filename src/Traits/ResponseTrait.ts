import { ResponseTraitType } from '../Types';
import { Response } from 'express';

class ResponseTrait {
  constructor() {
    //
  }
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

ResponseTrait.prototype.successData = (data: any): ResponseTraitType => {
  return {
    status: true,
    data,
    message: 'OK',
  };
};

ResponseTrait.prototype.success = (res: Response, data: any) => {
  return res.status(200).json(ResponseTrait.prototype.successData(data));
};

ResponseTrait.prototype.errorData = (message: any): ResponseTraitType => {
  return {
    status: false,
    data: {},
    message,
  };
};

ResponseTrait.prototype.error = (res: Response, message: any, statusCode: number) => {
  return res.status(statusCode).json(ResponseTrait.prototype.errorData(message));
};

ResponseTrait.prototype.notFound = (res: Response) => {
  return res.status(404).json(ResponseTrait.prototype.errorData('RESOURCE_NOT_FOUND'));
};

ResponseTrait.prototype.unauthenticated = (res: Response) => {
  return res.status(401).json(ResponseTrait.prototype.errorData('UNAUTHENTICATED'));
};

ResponseTrait.prototype.unauthorized = (res: Response) => {
  return res.status(403).json(ResponseTrait.prototype.errorData('UNAUTHORIZED'));
};

ResponseTrait.prototype.badRequest = (res: Response) => {
  return res.status(400).json(ResponseTrait.prototype.errorData('BAD_REQUEST'));
};

ResponseTrait.prototype.accepted = (res: Response, data: any) => {
  return res.status(200).json(ResponseTrait.prototype.successData(data));
};

export default ResponseTrait;
