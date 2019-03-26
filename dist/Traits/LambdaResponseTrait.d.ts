import { APIGatewayProxyResult } from 'aws-lambda';
declare class LambdaResponseTrait {
    constructor();
    static success: (data: any) => APIGatewayProxyResult;
}
export default LambdaResponseTrait;
