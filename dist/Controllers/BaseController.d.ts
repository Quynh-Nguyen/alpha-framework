import { ResponseTrait } from '../Traits';
declare class BaseController extends ResponseTrait {
    constructor();
    protected filterFields(input: any, fields: any): any;
}
export default BaseController;
