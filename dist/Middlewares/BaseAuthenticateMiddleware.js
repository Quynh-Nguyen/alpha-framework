"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Traits_1 = require("../Traits");
class BaseAuthenticateMiddleware extends Traits_1.ExpressResponseTrait {
    constructor() {
        super();
    }
    //@TODO: Initialize Watch Log Service
    static handle({}, res, next) {
        try {
            //@TODO: Call to User service for checking authentication
            return next();
        }
        catch (e) {
            return this.error(res, 'Testing', e.code);
        }
    }
}
exports.default = BaseAuthenticateMiddleware;
//# sourceMappingURL=BaseAuthenticateMiddleware.js.map