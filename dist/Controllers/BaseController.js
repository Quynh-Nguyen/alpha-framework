"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseController {
    constructor() {
        //
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