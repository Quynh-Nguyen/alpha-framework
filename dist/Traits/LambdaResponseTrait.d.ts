import { LambdaResponseTraitType } from '../Types';
declare class LambdaResponseTrait {
    constructor();
    static success: (data: any) => LambdaResponseTraitType;
}
export default LambdaResponseTrait;
