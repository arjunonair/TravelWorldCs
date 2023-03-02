"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createValidationError = void 0;
const adminjs_1 = require("adminjs");
exports.createValidationError = (originalError) => {
    const errors = Object.keys(originalError.errors).reduce((memo, key) => {
        const { message, kind, name } = originalError.errors[key];
        return {
            ...memo,
            [key]: {
                message,
                type: kind || name,
            },
        };
    }, {});
    return new adminjs_1.ValidationError(errors);
};
//# sourceMappingURL=create-validation-error.js.map