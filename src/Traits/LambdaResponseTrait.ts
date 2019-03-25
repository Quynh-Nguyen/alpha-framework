import { LambdaResponseTraitType } from '../Types';

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

  public static success = (data: any): LambdaResponseTraitType => {
    return {
      statusCode: 200,
      body: {
        status: true,
        data,
        message: 'OK',
      }
    }
  }
}

export default LambdaResponseTrait;