"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseTrait {
    constructor() {
        //
    }
}
ResponseTrait.prototype.successData = (data) => {
    return {
        status: true,
        data,
        message: 'OK',
    };
};
ResponseTrait.prototype.success = (res, data) => {
    return res.status(200).json(ResponseTrait.prototype.successData(data));
};
ResponseTrait.prototype.errorData = (message) => {
    return {
        status: false,
        data: {},
        message,
    };
};
ResponseTrait.prototype.error = (res, message, statusCode) => {
    return res.status(statusCode).json(ResponseTrait.prototype.errorData(message));
};
ResponseTrait.prototype.notFound = (res) => {
    return res.status(404).json(ResponseTrait.prototype.errorData('RESOURCE_NOT_FOUND'));
};
ResponseTrait.prototype.unauthenticated = (res) => {
    return res.status(401).json(ResponseTrait.prototype.errorData('UNAUTHENTICATED'));
};
ResponseTrait.prototype.unauthorized = (res) => {
    return res.status(403).json(ResponseTrait.prototype.errorData('UNAUTHORIZED'));
};
ResponseTrait.prototype.badRequest = (res) => {
    return res.status(400).json(ResponseTrait.prototype.errorData('BAD_REQUEST'));
};
ResponseTrait.prototype.accepted = (res, data) => {
    return res.status(200).json(ResponseTrait.prototype.successData(data));
};
exports.default = ResponseTrait;
//# sourceMappingURL=ResponseTrait.js.map