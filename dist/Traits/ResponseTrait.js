"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
var ResponseTrait_1;
"use strict";
function staticImplements() {
    return (constructor) => { constructor; };
}
let ResponseTrait = ResponseTrait_1 = class ResponseTrait {
    constructor() {
        //
    }
};
ResponseTrait.successData = (data) => {
    return {
        status: true,
        data,
        message: 'OK',
    };
};
ResponseTrait.success = (res, data) => {
    return res.status(200).json(ResponseTrait_1.successData(data));
};
ResponseTrait.errorData = (message) => {
    return {
        status: false,
        data: {},
        message,
    };
};
ResponseTrait.error = (res, message, statusCode) => {
    return res.status(statusCode).json(ResponseTrait_1.errorData(message));
};
ResponseTrait.notFound = (res) => {
    return res.status(404).json(ResponseTrait_1.errorData('RESOURCE_NOT_FOUND'));
};
ResponseTrait.unauthenticated = (res) => {
    return res.status(401).json(ResponseTrait_1.errorData('UNAUTHENTICATED'));
};
ResponseTrait.unauthorized = (res) => {
    return res.status(403).json(ResponseTrait_1.errorData('UNAUTHORIZED'));
};
ResponseTrait.badRequest = (res) => {
    return res.status(400).json(ResponseTrait_1.errorData('BAD_REQUEST'));
};
ResponseTrait.accepted = (res, data) => {
    return res.status(200).json(ResponseTrait_1.successData(data));
};
ResponseTrait = ResponseTrait_1 = tslib_1.__decorate([
    staticImplements(),
    tslib_1.__metadata("design:paramtypes", [])
], ResponseTrait);
exports.default = ResponseTrait;
//# sourceMappingURL=ResponseTrait.js.map