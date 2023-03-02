"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildAuthenticatedRouter = void 0;
const tslib_1 = require("tslib");
const adminjs_1 = require("adminjs");
const express_1 = tslib_1.__importDefault(require("express"));
const express_formidable_1 = tslib_1.__importDefault(require("express-formidable"));
const express_session_1 = tslib_1.__importDefault(require("express-session"));
const login_handler_1 = require("./authentication/login.handler");
const logout_handler_1 = require("./authentication/logout.handler");
const protected_routes_handler_1 = require("./authentication/protected-routes.handler");
const buildRouter_1 = require("./buildRouter");
const errors_1 = require("./errors");
/**
 * @typedef {Function} Authenticate
 * @memberof module:@adminjs/express
 * @description
 * function taking 2 arguments email and password
 * @param {string} [email]         email given in the form
 * @param {string} [password]      password given in the form
 * @return {CurrentAdmin | null}      returns current admin or null
 */
/**
 * Builds the Express Router which is protected by a session auth
 *
 * Using the router requires you to install `express-session` as a
 * dependency. Normally express-session holds session in memory, which is
 * not optimized for production usage and, in development, it causes
 * logging out after every page refresh (if you use nodemon).
 * @static
 * @memberof module:@adminjs/express
 * @example
 * const ADMIN = {
 *   email: 'test@example.com',
 *   password: 'password',
 * }
 *
 * AdminJSExpress.buildAuthenticatedRouter(adminJs, {
 *   authenticate: async (email, password) => {
 *     if (ADMIN.password === password && ADMIN.email === email) {
 *       return ADMIN
 *     }
 *     return null
 *   },
 *   cookieName: 'adminjs',
 *   cookiePassword: 'somePassword',
 * }, [router])
 */
const buildAuthenticatedRouter = (admin, auth, predefinedRouter, sessionOptions, formidableOptions) => {
    buildRouter_1.initializeAdmin(admin);
    const { routes, assets } = adminjs_1.Router;
    const router = predefinedRouter || express_1.default.Router();
    router.use((req, _, next) => {
        if (req._body) {
            next(new errors_1.OldBodyParserUsedError());
        }
        next();
    });
    router.use(express_session_1.default(Object.assign(Object.assign({}, sessionOptions), { secret: auth.cookiePassword, name: auth.cookieName || "adminjs" })));
    router.use(express_formidable_1.default(formidableOptions));
    login_handler_1.withLogin(router, admin, auth);
    logout_handler_1.withLogout(router, admin);
    buildRouter_1.buildAssets({ assets, router });
    protected_routes_handler_1.withProtectedRoutesHandler(router, admin);
    buildRouter_1.buildRoutes({ admin, routes, router });
    return router;
};
exports.buildAuthenticatedRouter = buildAuthenticatedRouter;
//# sourceMappingURL=buildAuthenticatedRouter.js.map