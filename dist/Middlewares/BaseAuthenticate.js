"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const Traits_1 = require("../Traits");
let BaseAuthenticateMiddleware = class BaseAuthenticateMiddleware extends Traits_1.ResponseTrait {
    constructor() {
        super();
    }
    //@TODO: Initialize Watch Log Service
    use(req, res, next) {
        try {
            console.log(req.body);
            return next();
        }
        catch (e) {
            this.error(res, 'Testing', e.code);
        }
    }
};
BaseAuthenticateMiddleware = tslib_1.__decorate([
    routing_controllers_1.Middleware({ type: 'before' }),
    tslib_1.__metadata("design:paramtypes", [])
], BaseAuthenticateMiddleware);
exports.BaseAuthenticateMiddleware = BaseAuthenticateMiddleware;
//# sourceMappingURL=BaseAuthenticate.js.map