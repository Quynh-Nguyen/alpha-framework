"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
function staticImplements() {
    return (constructor) => { constructor; };
}
let LambdaResponseTrait = class LambdaResponseTrait {
    constructor() {
        //
    }
};
LambdaResponseTrait.success = (data) => {
    return {
        statusCode: 200,
        body: {
            status: true,
            data,
            message: 'OK',
        }
    };
};
LambdaResponseTrait = tslib_1.__decorate([
    staticImplements(),
    tslib_1.__metadata("design:paramtypes", [])
], LambdaResponseTrait);
exports.default = LambdaResponseTrait;
//# sourceMappingURL=LambdaResponseTrait.js.map