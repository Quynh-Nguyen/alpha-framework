import { ExpressResponseTrait } from '../Traits';

class BaseController extends ExpressResponseTrait {
  constructor() {
    super();
  }

  protected filterFields(input: any, fields: any): any {
    const newInput: any = {};

    fields.array.forEach((key: string) => {
      if (input[key] !== undefined) {
        newInput[key] = input[key];
      }
    });

    return newInput;
  }
}

export default BaseController;
