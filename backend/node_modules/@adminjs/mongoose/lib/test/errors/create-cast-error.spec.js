"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_cast_error_1 = require("../../src/utils/create-cast-error");
const mongoose_cast_error_1 = require("../fixtures/mongoose-cast-error");
const mongoose_cast_array_error_1 = require("../fixtures/mongoose-cast-array-error");
describe('createCastError', () => {
    describe('throwin cast error on update after one key has error', () => {
        it('has error for nested "parent.age" (errorKey) field', () => {
            const error = create_cast_error_1.createCastError(mongoose_cast_error_1.SAMPLE_CAST_ERROR);
            expect(error.propertyErrors.age.type).toEqual('Number');
        });
    });
    describe('throwing cast error on update when one array field has error', () => {
        it('throws an error for root field', () => {
            const error = create_cast_error_1.createCastError(mongoose_cast_array_error_1.SAMPLE_CAST_ARRAY_ERROR);
            expect(error.propertyErrors.authors.type).toEqual('ObjectId');
        });
    });
});
//# sourceMappingURL=create-cast-error.spec.js.map