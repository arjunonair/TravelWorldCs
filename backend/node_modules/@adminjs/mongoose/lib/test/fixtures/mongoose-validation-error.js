"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SAMPLE_VALIDATION_ERROR = void 0;
exports.SAMPLE_VALIDATION_ERROR = {
    _message: 'User validation failed',
    errors: {
        email: {
            $isValidatorError: true,
            kind: 'required',
            message: 'Path `email` is required.',
            name: 'ValidatorError',
            path: 'email',
            properties: {
                message: 'Path `email` is required.',
                path: 'email',
                type: 'required',
                value: '',
            },
            value: '',
        },
        passwordHash: {
            $isValidatorError: true,
            kind: 'required',
            message: 'Path `passwordHash` is required.',
            name: 'ValidatorError',
            path: 'passwordHash',
            properties: {
                message: 'Path `passwordHash` is required.',
                path: 'passwordHash',
                type: 'required',
                value: '',
            },
            value: '',
        },
    },
    message: 'User validation failed: email: Path `email` is required., passwordHash: Path `passwordHash` is required.',
    name: 'ValidationError',
};
//# sourceMappingURL=mongoose-validation-error.js.map