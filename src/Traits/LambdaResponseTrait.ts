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
        "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS 
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
        "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS 
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
