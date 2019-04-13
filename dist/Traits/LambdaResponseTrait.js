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
        headers: {
            'Access-Control-Max-Age': 600,
            'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent',
            'Access-Control-Expose-Headers': 'Content-Length',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': false,
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PUT,DELETE,PATCH',
        },
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
        headers: {
            'Access-Control-Max-Age': 600,
            'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent',
            'Access-Control-Expose-Headers': 'Content-Length',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': false,
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PUT,DELETE,PATCH',
        },
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