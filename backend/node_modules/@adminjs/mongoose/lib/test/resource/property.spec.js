"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = __importDefault(require("../../src/resource"));
const models_1 = require("../utils/models");
const property_1 = __importDefault(require("../../src/property"));
describe('Resource #property', () => {
    let resource;
    let returnedProperty;
    beforeEach(() => {
        resource = new resource_1.default(models_1.User);
        returnedProperty = resource.property('email');
    });
    it('returns selected property for an email', () => {
        expect(returnedProperty.name()).toEqual('email');
    });
    it('returns instance of Property class', () => {
        expect(returnedProperty).toBeInstanceOf(property_1.default);
    });
});
//# sourceMappingURL=property.spec.js.map