"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const resource_1 = __importDefault(require("../../src/resource"));
const models_1 = require("../utils/models");
const property_1 = __importDefault(require("../../src/property"));
describe('Resource #properties', () => {
    let resource;
    let returnedProperties;
    beforeEach(() => {
        resource = new resource_1.default(models_1.User);
        returnedProperties = resource.properties();
    });
    it('returns correct amount of properties', () => {
        // 8 because of implicit _id and __v properties
        expect(returnedProperties.length).toEqual(8);
    });
    it('sets the position of properties', () => {
        expect(returnedProperties.map(p => p.position())).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
    });
    it('returns instances of Property class', async () => {
        expect(returnedProperties[0]).toBeInstanceOf(property_1.default);
    });
    it('returns all fields for nested properties', () => {
        const Nested = mongoose_1.default.model('Nested', new mongoose_1.default.Schema({
            field: {
                subfield: String,
                anotherSubField: String,
            },
        }));
        const nestedResource = new resource_1.default(Nested);
        const propertiesOfNestedResource = nestedResource.properties();
        expect(propertiesOfNestedResource.length).toEqual(4);
    });
});
//# sourceMappingURL=properties.spec.js.map