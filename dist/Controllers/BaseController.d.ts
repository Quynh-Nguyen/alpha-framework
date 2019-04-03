import { ExpressResponseTrait } from '../Traits';
declare class BaseController extends ExpressResponseTrait {
    constructor();
    protected filterFields(input: any, fields: any): any;
}
export default BaseController;
