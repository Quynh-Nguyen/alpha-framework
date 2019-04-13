import { APIGatewayProxyResult } from 'aws-lambda';

interface LambdaResponseTraitInterface {
  success(data: any): object;

  error(message: any, statusCode: number): object;
}

function staticImplements<T>() {
  return (constructor: T) => {
    constructor;
  };
}

@staticImplements<LambdaResponseTraitInterface>()
class LambdaResponseTrait {
  constructor() {
    //
  }

  public static success = (data: any): APIGatewayProxyResult => {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Max-Age' : 600,
        'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent',
        'Access-Control-Expose-Headers': 'Content-Length',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Credentials' : false,
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PUT,DELETE,PATCH',
      },
      body: JSON.stringify({
        statusCode: 200,
        data,
        message: 'OK',
      })
    }
  }

  public static error = (message: any, statusCode = 404): APIGatewayProxyResult => {
    return {
      statusCode,
      headers: {
        'Access-Control-Max-Age' : 600,
        'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent',
        'Access-Control-Expose-Headers': 'Content-Length',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Credentials' : false,
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PUT,DELETE,PATCH',
      },
      body: JSON.stringify({
        statusCode,
        data: null,
        message,
      })
    }
  }
}

export default LambdaResponseTrait;
