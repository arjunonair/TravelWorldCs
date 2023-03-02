"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const database_1 = __importDefault(require("../src/database"));
describe('Database', () => {
    describe('#resources', () => {
        let resources;
        beforeEach(() => {
            resources = new database_1.default(mongoose_1.default.connection).resources();
        });
        it('return all resources', () => {
            expect(resources.length).toEqual(3);
        });
    });
});
//# sourceMappingURL=database.spec.js.map