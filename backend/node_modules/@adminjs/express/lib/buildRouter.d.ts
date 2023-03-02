import AdminJS, { Router as AdminRouter } from "adminjs";
import { RequestHandler, Router } from "express";
import { FormidableOptions } from "./types";
export declare type RouteHandlerArgs = {
    admin: AdminJS;
    route: typeof AdminRouter["routes"][0];
};
export declare type BuildRoutesArgs = {
    admin: AdminJS;
    routes: typeof AdminRouter["routes"];
    router: Router;
};
export declare type BuildAssetsArgs = {
    assets: typeof AdminRouter["assets"];
    router: Router;
};
export declare const initializeAdmin: (admin: AdminJS) => void;
export declare const routeHandler: ({ admin, route, }: RouteHandlerArgs) => RequestHandler;
export declare const buildRoutes: ({ admin, routes, router, }: BuildRoutesArgs) => void;
export declare const buildAssets: ({ assets, router }: BuildAssetsArgs) => void;
export declare const buildRouter: (admin: AdminJS, predefinedRouter?: Router | null | undefined, formidableOptions?: FormidableOptions | undefined) => Router;
