"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adminjs_1 = require("adminjs");
const factory_girl_1 = require("factory-girl");
const resource_1 = __importDefault(require("../../src/resource"));
const models_1 = require("../utils/models");
describe('Resource #find', () => {
    it('returns first n items', async () => {
        await factory_girl_1.factory.createMany('user', 10);
        const resource = new resource_1.default(models_1.User);
        const limit = 5;
        const offset = 0;
        const returnedItems = await resource.find(new adminjs_1.Filter({}, models_1.User), {
            limit,
            offset,
        });
        expect(returnedItems.length).toEqual(limit);
        expect(returnedItems[0]).toBeInstanceOf(adminjs_1.BaseRecord);
    });
    it('searches by id', async () => {
        const users = await factory_girl_1.factory.createMany('user', 10);
        const resource = new resource_1.default(models_1.User);
        const limit = 5;
        const offset = 0;
        const idFilters = new adminjs_1.Filter({ _id: users[0]._id.toHexString() }, resource);
        const returnedItems = await resource.find(idFilters, { limit, offset });
        expect(returnedItems.length).toEqual(1);
        expect(returnedItems[0]).toBeInstanceOf(adminjs_1.BaseRecord);
    });
});
//# sourceMappingURL=find.spec.js.map