"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adminjs_1 = require("adminjs");
const factory_girl_1 = require("factory-girl");
const resource_1 = __importDefault(require("../../src/resource"));
const valid_user_record_1 = __importDefault(require("../fixtures/valid-user-record"));
const models_1 = require("../utils/models");
describe('Resource #create', () => {
    it('creates new record with valid parameters', async () => {
        const resource = new resource_1.default(models_1.User);
        const record = await resource.create(valid_user_record_1.default);
        expect(await resource.count()).toEqual(1);
        expect(record).toBeInstanceOf(Object);
    });
    it('throws validation error for record with invalid parameters', async () => {
        const resource = new resource_1.default(models_1.User);
        await expect(() => resource.create({ email: '', passwordHash: '' })).rejects.toThrow(adminjs_1.ValidationError);
    });
    it('throws validation error for record with cast errors in nested schema', async () => {
        const resource = new resource_1.default(models_1.User);
        try {
            await resource.create({
                email: 'a@a.pl',
                passwordHash: 'asdasdasd',
                'parent.age': 'not a number',
            });
            throw new Error('Should throw validation error');
        }
        catch (error) {
            expect(error).toBeInstanceOf(adminjs_1.ValidationError);
            expect(error.propertyErrors['parent.age'].type).toEqual('Number');
            expect(error.propertyErrors.parent.type).toEqual('ValidationError');
        }
    });
    it('throws duplicate error for record with unique field', async () => {
        const peselResource = new resource_1.default(models_1.Pesel);
        try {
            await peselResource.create({ pesel: '1' });
            await peselResource.create({ pesel: '1' });
        }
        catch (error) {
            expect(error).toBeInstanceOf(adminjs_1.ValidationError);
            expect(error.propertyErrors.pesel.type).toEqual('duplicate');
        }
    });
    it('creates resource with id field passed as an empty string', async () => {
        const resource = new resource_1.default(models_1.Article);
        await resource.create({ content: 'some content', createdBy: '' });
        const recordsCount = await resource.count();
        expect(recordsCount).toEqual(1);
    });
    it('creates new resource for record with reference', async () => {
        const resource = new resource_1.default(models_1.Article);
        const userRecords = await factory_girl_1.factory.createMany('user', 1);
        const createdRecord = await resource.create({ content: '', createdBy: userRecords[0]._id });
        expect(createdRecord.createdBy.toString()).toEqual(userRecords[0]._id.toString());
    });
    it('creates new object for record with nested array', async () => {
        const resource = new resource_1.default(models_1.User);
        await factory_girl_1.factory.createMany('user', 1);
        const countBefore = await resource.count();
        await resource.create({
            email: 'john@doe.com',
            passwordHash: 'somesecretpasswordhash',
            'parent.name': 'name',
            'parent.nestedArray': '',
            'parent.nestedObject': '',
            'family.0.name': 'some string',
            'family.0.nestedArray.0': '',
            'family.1': '',
        });
        const countAfter = await resource.count();
        expect(countAfter - countBefore).toEqual(1);
    });
});
//# sourceMappingURL=create.spec.js.map