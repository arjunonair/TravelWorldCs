"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const factory_girl_1 = require("factory-girl");
const resource_1 = __importDefault(require("../../src/resource"));
const models_1 = require("../utils/models");
describe('Resource #delete', () => {
    it('removes the item from the database', async () => {
        const resource = new resource_1.default(models_1.User);
        const records = await factory_girl_1.factory.createMany('user', 12);
        const initialNumberOfRecords = await models_1.User.countDocuments();
        const idOfItemToDelete = records[0]._id;
        await resource.delete(idOfItemToDelete);
        expect(await models_1.User.countDocuments()).toEqual(initialNumberOfRecords - 1);
    });
});
//# sourceMappingURL=delete.spec.js.map