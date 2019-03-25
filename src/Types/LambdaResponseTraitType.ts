interface LambdaResponseTraitType {
  statusCode: number;
  body?: {
    status: boolean;
    data: any;
    message: any;
  }
}

export default LambdaResponseTraitType;
