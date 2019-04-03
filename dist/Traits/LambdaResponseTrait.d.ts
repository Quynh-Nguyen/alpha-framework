import { APIGatewayProxyResult } from 'aws-lambda';
declare class LambdaResponseTrait {
    constructor();
    static success: (data: any) => APIGatewayProxyResult;
    static error: (message: any, statusCode?: number) => APIGatewayProxyResult;
}
export default LambdaResponseTrait;
