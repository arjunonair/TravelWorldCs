"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = __importDefault(require("../../src/resource"));
const models_1 = require("../utils/models");
describe('Resource', () => {
    describe('#constructor', () => {
        it('stores original model', () => {
            const userResource = new resource_1.default(models_1.User);
            expect(userResource.MongooseModel).toEqual(models_1.User);
        });
    });
});
//# sourceMappingURL=constructor.js.map