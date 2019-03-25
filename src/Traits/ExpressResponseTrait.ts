import { ResponseTraitType } from '../Types';
import { Response } from 'express';

interface ResponseTraitInterface {
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

function staticImplements<T>() {
  return (constructor: T) => {constructor};
}

@staticImplements<ResponseTraitInterface>()
class ResponseTrait {
  constructor() {
    //
  }

  public static successData = (data: any): ResponseTraitType => {
    return {
      status: true,
      data,
      message: 'OK',
    };
  };

  public static success = (res: Response, data: any) => {
    return res.status(200).json(ResponseTrait.successData(data));
  };

  public static errorData = (message: any): ResponseTraitType => {
    return {
      status: false,
      data: {},
      message,
    };
  };

  public static error = (res: Response, message: any, statusCode: number) => {
    return res.status(statusCode).json(ResponseTrait.errorData(message));
  };

  public static notFound = (res: Response) => {
    return res.status(404).json(ResponseTrait.errorData('RESOURCE_NOT_FOUND'));
  };

  public static unauthenticated = (res: Response) => {
    return res.status(401).json(ResponseTrait.errorData('UNAUTHENTICATED'));
  };

  public static unauthorized = (res: Response) => {
    return res.status(403).json(ResponseTrait.errorData('UNAUTHORIZED'));
  };

  public static badRequest = (res: Response) => {
    return res.status(400).json(ResponseTrait.errorData('BAD_REQUEST'));
  };

  public static accepted = (res: Response, data: any) => {
    return res.status(200).json(ResponseTrait.successData(data));
  };
}

export default ResponseTrait;
