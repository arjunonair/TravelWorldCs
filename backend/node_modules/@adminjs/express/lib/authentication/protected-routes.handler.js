"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withProtectedRoutesHandler = void 0;
const withProtectedRoutesHandler = (router, admin) => {
    const { loginPath } = admin.options;
    const authorizedRoutesMiddleware = (request, response, next) => {
        if (!request.session || !request.session.adminUser) {
            return response.redirect(loginPath);
        }
        return next();
    };
    router.use(authorizedRoutesMiddleware);
};
exports.withProtectedRoutesHandler = withProtectedRoutesHandler;
//# sourceMappingURL=protected-routes.handler.js.map