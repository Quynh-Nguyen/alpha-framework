// import { LambdaResponseTraitType } from '../Types';
import { APIGatewayProxyResult } from 'aws-lambda';

interface LambdaResponseTraitInterface {
  success(data: any): object;
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
}

export default LambdaResponseTrait;