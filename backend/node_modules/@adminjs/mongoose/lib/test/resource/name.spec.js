"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = __importDefault(require("../../src/resource"));
const models_1 = require("../utils/models");
describe('Resource #name', () => {
    it('returns name of the model', () => {
        const resource = new resource_1.default(models_1.User);
        expect(resource.name()).toEqual('User');
    });
});
//# sourceMappingURL=name.spec.js.map