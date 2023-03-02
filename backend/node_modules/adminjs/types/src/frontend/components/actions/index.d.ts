/// <reference types="react" />
export * from './new';
export * from './action.props';
export * from './edit';
export * from './show';
export * from './list';
export * from './bulk-delete';
export * from './utils';
export declare const actions: {
    new: import("react").ComponentType<import("./action.props").ActionProps & {
        OriginalComponent?: import("react").ComponentType<import("./action.props").ActionProps> | undefined;
    }>;
    edit: import("react").ComponentType<import("./action.props").ActionProps & {
        OriginalComponent?: import("react").ComponentType<import("./action.props").ActionProps> | undefined;
    }>;
    show: import("react").ComponentType<import("./action.props").ActionProps & {
        OriginalComponent?: import("react").ComponentType<import("./action.props").ActionProps> | undefined;
    }>;
    list: import("react").ComponentType<import("./action.props").ActionProps & {
        OriginalComponent?: import("react").ComponentType<import("./action.props").ActionProps> | undefined;
    }>;
    bulkDelete: import("react").ComponentType<{
        context?: import("react").Context<import("react-redux").ReactReduxContextValue<any, import("redux").AnyAction>> | undefined;
        store?: import("redux").Store<any, import("redux").AnyAction> | undefined;
    } & {
        OriginalComponent?: import("react").ComponentType<{
            context?: import("react").Context<import("react-redux").ReactReduxContextValue<any, import("redux").AnyAction>> | undefined;
            store?: import("redux").Store<any, import("redux").AnyAction> | undefined;
        }> | undefined;
    }>;
};
