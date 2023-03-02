"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildRouter = exports.buildAssets = exports.buildRoutes = exports.routeHandler = exports.initializeAdmin = void 0;
const tslib_1 = require("tslib");
const adminjs_1 = require("adminjs");
const express_1 = require("express");
const express_formidable_1 = tslib_1.__importDefault(require("express-formidable"));
const path_1 = tslib_1.__importDefault(require("path"));
const errors_1 = require("./errors");
const logger_1 = require("./logger");
const convertRoutes_1 = require("./convertRoutes");
const INVALID_ADMINJS_INSTANCE = "You have to pass an instance of AdminJS to the buildRouter() function";
const initializeAdmin = (admin) => {
    var _a;
    if (((_a = admin === null || admin === void 0 ? void 0 : admin.constructor) === null || _a === void 0 ? void 0 : _a.name) !== "AdminJS") {
        throw new errors_1.WrongArgumentError(INVALID_ADMINJS_INSTANCE);
    }
    admin.initialize().then(() => {
        logger_1.log.debug("AdminJS: bundle ready");
    });
};
exports.initializeAdmin = initializeAdmin;
const routeHandler = ({ admin, route, }) => async (req, res, next) => {
    try {
        const controller = new route.Controller({ admin }, req.session && req.session.adminUser);
        const { params, query } = req;
        const method = req.method.toLowerCase();
        const payload = Object.assign(Object.assign({}, (req.fields || {})), (req.files || {}));
        const html = await controller[route.action](Object.assign(Object.assign({}, req), { params,
            query,
            payload,
            method }), res);
        if (route.contentType) {
            res.set({ "Content-Type": route.contentType });
        }
        if (html) {
            res.send(html);
        }
    }
    catch (e) {
        next(e);
    }
};
exports.routeHandler = routeHandler;
const buildRoutes = ({ admin, routes, router, }) => {
    routes.forEach((route) => {
        // we have to change routes defined in AdminJS from {recordId} to :recordId
        const expressPath = convertRoutes_1.convertToExpressRoute(route.path);
        if (route.method === "GET") {
            router.get(expressPath, exports.routeHandler({ admin, route }));
        }
        if (route.method === "POST") {
            router.post(expressPath, exports.routeHandler({ admin, route }));
        }
    });
};
exports.buildRoutes = buildRoutes;
const buildAssets = ({ assets, router }) => {
    assets.forEach((asset) => {
        router.get(asset.path, async (_req, res) => {
            res.sendFile(path_1.default.resolve(asset.src));
        });
    });
};
exports.buildAssets = buildAssets;
const buildRouter = (admin, predefinedRouter, formidableOptions) => {
    exports.initializeAdmin(admin);
    const { routes, assets } = adminjs_1.Router;
    const router = predefinedRouter !== null && predefinedRouter !== void 0 ? predefinedRouter : express_1.Router();
    router.use(express_formidable_1.default(formidableOptions));
    exports.buildRoutes({ admin, routes, router });
    exports.buildAssets({ assets, router });
    return router;
};
exports.buildRouter = buildRouter;
//# sourceMappingURL=buildRouter.js.map