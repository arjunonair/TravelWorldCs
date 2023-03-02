"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adminjs_1 = require("adminjs");
const resource_1 = __importDefault(require("./resource"));
class Database extends adminjs_1.BaseDatabase {
    constructor(connection) {
        super(connection);
        this.connection = connection;
    }
    static isAdapterFor(connection) {
        return connection.constructor.name === 'Mongoose';
    }
    resources() {
        return this.connection.modelNames().map(name => (new resource_1.default(this.connection.model(name))));
    }
}
exports.default = Database;
//# sourceMappingURL=database.js.map