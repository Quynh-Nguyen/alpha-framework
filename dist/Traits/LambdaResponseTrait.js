"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
function staticImplements() {
    return (constructor) => {
        constructor;
    };
}
let LambdaResponseTrait = class LambdaResponseTrait {
    constructor() {
        //
    }
};
LambdaResponseTrait.success = (data) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            statusCode: 200,
            data,
            message: 'OK',
        })
    };
};
LambdaResponseTrait.error = (message, statusCode = 404) => {
    return {
        statusCode,
        body: JSON.stringify({
            statusCode,
            data: null,
            message,
        })
    };
};
LambdaResponseTrait = tslib_1.__decorate([
    staticImplements(),
    tslib_1.__metadata("design:paramtypes", [])
], LambdaResponseTrait);
exports.default = LambdaResponseTrait;
//# sourceMappingURL=LambdaResponseTrait.js.map