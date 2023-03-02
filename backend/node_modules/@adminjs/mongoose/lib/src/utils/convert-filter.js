"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertFilter = void 0;
const escape_regexp_1 = __importDefault(require("escape-regexp"));
const mongoose_1 = __importDefault(require("mongoose"));
/**
 * Changes AdminJS's {@link Filter} to an object acceptible by a mongoose query.
 *
 * @param {Filter} filter
 * @private
 */
exports.convertFilter = (filter) => {
    if (!filter) {
        return {};
    }
    return filter.reduce((memo, filterProperty) => {
        const { property, value } = filterProperty;
        switch (property.type()) {
            case 'string':
                return {
                    [property.name()]: { $regex: escape_regexp_1.default(value), $options: 'i' },
                    ...memo,
                };
            case 'date':
            case 'datetime':
                if (value.from || value.to) {
                    return {
                        [property.name()]: {
                            ...value.from && { $gte: value.from },
                            ...value.to && { $lte: value.to },
                        },
                        ...memo,
                    };
                }
                break;
            case 'id':
                if (mongoose_1.default.Types.ObjectId.isValid(value)) {
                    return {
                        [property.name()]: value,
                        ...memo,
                    };
                }
                return {};
            default:
                break;
        }
        return {
            [property.name()]: value,
            ...memo,
        };
    }, {});
};
//# sourceMappingURL=convert-filter.js.map