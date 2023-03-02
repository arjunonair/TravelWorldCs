"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SAMPLE_CAST_ERROR = void 0;
exports.SAMPLE_CAST_ERROR = {
    stringValue: '"asdasd"',
    kind: 'Number',
    value: 'asdasd',
    path: 'age',
    reason: {
        stringValue: '"asdasd"',
        kind: 'number',
        value: 'asdasd',
        path: 'age',
        reason: {
            generatedMessage: true,
            name: 'AssertionError [ERR_ASSERTION]',
            code: 'ERR_ASSERTION',
            actual: false,
            expected: true,
            operator: '==',
        },
        message: 'Cast to number failed for value "asdasd" at path "age"',
        name: 'CastError',
    },
    message: 'Cast to Number failed for value "asdasd" at path "age"',
    name: 'CastError',
};
//# sourceMappingURL=mongoose-cast-error.js.map