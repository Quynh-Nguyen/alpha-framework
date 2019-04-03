import { APIGatewayProxyResult } from 'aws-lambda';

interface LambdaResponseTraitInterface {
  success(data: any): object;
  error(message: any, statusCode: number): object;
}

function staticImplements<T>() {
  return (constructor: T) => {constructor};
}

@staticImplements<LambdaResponseTraitInterface>()
class LambdaResponseTrait {
  constructor() {
    //
  }

  public static success = (data: any): APIGatewayProxyResult => {
    return {
      statusCode: 200,
      body: JSON.stringify({
        status: true,
        data,
        message: 'OK',
      })
    }
  }

  public static error = (message: any, statusCode = 404): APIGatewayProxyResult => {
    return {
      statusCode,
      body: JSON.stringify({
        status: true,
        data: [],
        message,
      })
    }
  }
}

export default LambdaResponseTrait;
