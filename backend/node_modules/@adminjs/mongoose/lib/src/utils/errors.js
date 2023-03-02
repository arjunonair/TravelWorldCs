"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    // Error thrown by mongoose in case of validation error
    MONGOOSE_VALIDATION_ERROR: 'ValidationError',
    // Error thrown by mongoose in case of casting error (writing string to Number field)
    MONGOOSE_CAST_ERROR: 'CastError',
    // Error thrown by mongoose in case of inserting duplicate record
    // with some property marked as `unique`
    MONGOOSE_DUPLICATE_ERROR_CODE: 11000,
};
//# sourceMappingURL=errors.js.map