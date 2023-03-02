"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resource = exports.Database = void 0;
const database_1 = __importDefault(require("./src/database"));
exports.Database = database_1.default;
const resource_1 = __importDefault(require("./src/resource"));
exports.Resource = resource_1.default;
module.exports = { Database: database_1.default, Resource: resource_1.default };
//# sourceMappingURL=index.js.map