"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
exports.log = {
    /**
     * Logs the debug message to console if `process.env.ADMINJS_EXPRESS_DEBUG` is set
     */
    debug: (message) => {
        if (process.env.ADMINJS_EXPRESS_DEBUG) {
            console.debug(message);
        }
    },
};
//# sourceMappingURL=logger.js.map