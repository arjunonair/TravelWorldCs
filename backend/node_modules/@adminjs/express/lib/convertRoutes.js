"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToExpressRoute = void 0;
const convertToExpressRoute = (adminRoute) => adminRoute.replace(/{/g, ":").replace(/}/g, "");
exports.convertToExpressRoute = convertToExpressRoute;
//# sourceMappingURL=convertRoutes.js.map