"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adminjs_1 = require("adminjs");
const factory_girl_1 = require("factory-girl");
const resource_1 = __importDefault(require("../../src/resource"));
const models_1 = require("../utils/models");
describe('Resource #count', () => {
    let resource;
    beforeEach(() => {
        resource = new resource_1.default(models_1.User);
    });
    it('returns given count without filters', async () => {
        const NUMBER_OF_RECORDS = 12;
        await factory_girl_1.factory.createMany('user', NUMBER_OF_RECORDS);
        const countedRecords = await resource.count(new adminjs_1.Filter({}, resource));
        expect(countedRecords).toEqual(NUMBER_OF_RECORDS);
    });
    it('returns given count for given filters', async () => {
        const filterOutAllRecords = new adminjs_1.Filter({
            email: 'some-not-existing-email',
        }, resource);
        const counterRecords = await resource.count(filterOutAllRecords);
        expect(counterRecords).toEqual(0);
    });
});
//# sourceMappingURL=count.spec.js.map