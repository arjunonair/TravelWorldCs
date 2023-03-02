export declare const SAMPLE_NESTED_VALIDATION_ERROR: {
    errors: {
        'parent.age': {
            message: string;
            name: string;
            stringValue: string;
            kind: string;
            value: string;
            path: string;
            reason: {
                message: string;
                name: string;
                stringValue: string;
                kind: string;
                value: string;
                path: string;
            };
        };
        parent: {
            errors: {
                age: {
                    message: string;
                    name: string;
                    stringValue: string;
                    kind: string;
                    value: string;
                    path: string;
                    reason: {
                        message: string;
                        name: string;
                        stringValue: string;
                        kind: string;
                        value: string;
                        path: string;
                    };
                };
            };
            _message: string;
            message: string;
            name: string;
        };
    };
    _message: string;
    message: string;
    name: string;
};
