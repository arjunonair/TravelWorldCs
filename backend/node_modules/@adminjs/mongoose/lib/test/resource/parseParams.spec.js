"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = __importDefault(require("../../src/resource"));
const models_1 = require("../utils/models");
describe('Resource #parseParams', () => {
    let resource;
    beforeEach(() => {
        resource = new resource_1.default(models_1.User);
    });
    it('converts empty strings to nulls for ObjectIDs', () => {
        expect(resource.parseParams({ _id: '' })).toHaveProperty('_id', null);
    });
    it('converts empty strings to [] for arrays', () => {
        expect(resource.parseParams({ family: '' })).toHaveProperty('family', []);
    });
});
//# sourceMappingURL=parseParams.spec.js.map