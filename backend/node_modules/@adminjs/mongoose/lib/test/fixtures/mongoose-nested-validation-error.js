"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SAMPLE_NESTED_VALIDATION_ERROR = void 0;
exports.SAMPLE_NESTED_VALIDATION_ERROR = {
    errors: {
        'parent.age': {
            message: 'Cast to Number failed for value "not a number" at path "age"',
            name: 'CastError',
            stringValue: '"not a number"',
            kind: 'Number',
            value: 'not a number',
            path: 'age',
            reason: {
                message: 'Cast to number failed for value "not a number" at path "age"',
                name: 'CastError',
                stringValue: '"not a number"',
                kind: 'number',
                value: 'not a number',
                path: 'age',
            },
        },
        parent: {
            errors: {
                age: {
                    message: 'Cast to Number failed for value "not a number" at path "age"',
                    name: 'CastError',
                    stringValue: '"not a number"',
                    kind: 'Number',
                    value: 'not a number',
                    path: 'age',
                    reason: {
                        message: 'Cast to number failed for value "not a number" at path "age"',
                        name: 'CastError',
                        stringValue: '"not a number"',
                        kind: 'number',
                        value: 'not a number',
                        path: 'age',
                    },
                },
            },
            _message: 'Validation failed',
            message: 'Validation failed: age: Cast to Number failed for value "not a number" at path "age"',
            name: 'ValidationError',
        },
    },
    _message: 'User validation failed',
    message: 'User validation failed: parent.age: Cast to Number failed for value "not a number" at path "age", parent: Validation failed: age: Cast to Number failed for value "not a number" at path "age"',
    name: 'ValidationError',
};
//# sourceMappingURL=mongoose-nested-validation-error.js.map