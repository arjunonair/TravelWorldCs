"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_validation_error_1 = require("../../src/utils/create-validation-error");
const mongoose_validation_error_1 = require("../fixtures/mongoose-validation-error");
const mongoose_nested_validation_error_1 = require("../fixtures/mongoose-nested-validation-error");
describe('#createValidationError', () => {
    describe('regular error', () => {
        it('has errors', () => {
            const error = create_validation_error_1.createValidationError(mongoose_validation_error_1.SAMPLE_VALIDATION_ERROR);
            expect(Object.keys(error.propertyErrors).length).toEqual(2);
        });
        it('has error for email', () => {
            const error = create_validation_error_1.createValidationError(mongoose_validation_error_1.SAMPLE_VALIDATION_ERROR);
            expect(error.propertyErrors.email.type).toEqual('required');
        });
    });
    describe('error for nested field', () => {
        it('2 errors, one for root field and one for an actual nested field', () => {
            const error = create_validation_error_1.createValidationError(mongoose_nested_validation_error_1.SAMPLE_NESTED_VALIDATION_ERROR);
            expect(Object.keys(error.propertyErrors).length).toEqual(2);
        });
        it('has error for nested "parent.age" field', () => {
            const error = create_validation_error_1.createValidationError(mongoose_nested_validation_error_1.SAMPLE_NESTED_VALIDATION_ERROR);
            expect(error.propertyErrors['parent.age'].type).toEqual('Number');
        });
        it('has error for "parent" field', () => {
            const error = create_validation_error_1.createValidationError(mongoose_nested_validation_error_1.SAMPLE_NESTED_VALIDATION_ERROR);
            expect(error.propertyErrors.parent.type).toEqual('ValidationError');
        });
    });
});
//# sourceMappingURL=create-validation-error.spec.js.map