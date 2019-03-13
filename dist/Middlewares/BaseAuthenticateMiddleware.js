"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Traits_1 = require("../Traits");
class BaseAuthenticateMiddleware extends Traits_1.ResponseTrait {
    constructor() {
        super();
    }
    //@TODO: Initialize Watch Log Service
    static handle(req, res, next) {
        try {
            console.log(req.body);
            return next();
        }
        catch (e) {
            return this.error(res, 'Testing', e.code);
        }
    }
}
exports.default = BaseAuthenticateMiddleware;
//# sourceMappingURL=BaseAuthenticateMiddleware.js.map