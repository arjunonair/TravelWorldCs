"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = __importDefault(require("../../src/resource"));
const models_1 = require("../utils/models");
describe('Resource #update', () => {
    it('changes record and returns updated', async () => {
        const resource = new resource_1.default(models_1.Article);
        const initialRecord = await resource.create({
            content: 'Test content',
        });
        const updatedRecord = await resource.update(initialRecord._id, { content: 'Updated content' });
        expect(updatedRecord.content).toEqual('Updated content');
    });
});
//# sourceMappingURL=update.spec.js.map