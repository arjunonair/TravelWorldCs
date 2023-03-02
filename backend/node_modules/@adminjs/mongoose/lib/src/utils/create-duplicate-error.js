"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDuplicateError = void 0;
const adminjs_1 = require("adminjs");
const createDuplicateMessage = message => ({
    type: 'duplicate',
    message,
});
exports.createDuplicateError = ({ keyValue: duplicateEntry, errmsg }, document) => {
    if (!duplicateEntry) {
        const duplicatedKey = Object.keys(document).find(key => errmsg.includes(key));
        return new adminjs_1.ValidationError({
            [duplicatedKey]: createDuplicateMessage(`Record with that ${duplicatedKey} already exists`),
        });
    }
    const [[keyName]] = Object.entries(duplicateEntry);
    return new adminjs_1.ValidationError({
        [keyName]: createDuplicateMessage(`Record with that ${keyName} already exists`),
    });
};
//# sourceMappingURL=create-duplicate-error.js.map