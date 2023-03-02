"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = __importDefault(require("../../src/resource"));
const models_1 = require("../utils/models");
describe('Resource #position', () => {
    it('returns position of a parent field', () => {
        const property = new resource_1.default(models_1.User).property('parent');
        expect(property.position()).toEqual(4);
    });
});
//# sourceMappingURL=position.spec.js.map