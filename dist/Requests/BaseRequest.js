"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const check_1 = require("express-validator/check");
const Traits_1 = require("../Traits");
const { error } = Traits_1.ExpressResponseTrait;
class BaseRequest extends Traits_1.ExpressResponseTrait {
    constructor() {
        super();
    }
    static validate(req, res, next) {
        const errors = check_1.validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        return error(res, errors.mapped(), 400);
    }
}
exports.default = BaseRequest;
//# sourceMappingURL=BaseRequest.js.map