"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Traits_1 = require("../Traits");
class BaseController extends Traits_1.ExpressResponseTrait {
    constructor() {
        super();
    }
    filterFields(input, fields) {
        const newInput = {};
        fields.array.forEach((key) => {
            if (input[key] !== undefined) {
                newInput[key] = input[key];
            }
        });
        return newInput;
    }
}
exports.default = BaseController;
//# sourceMappingURL=BaseController.js.map