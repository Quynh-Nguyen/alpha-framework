"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const check_1 = require("express-validator/check");
// import { ResponseTrait } from '../Traits';
class BaseRequest {
    static validate(req, res, next) {
        const errors = check_1.validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        return res.json(
        // ResponseTrait.error(
        //   String(errors.mapped()), 400
        // )
        );
    }
}
exports.default = BaseRequest;
//# sourceMappingURL=BaseRequest.js.map