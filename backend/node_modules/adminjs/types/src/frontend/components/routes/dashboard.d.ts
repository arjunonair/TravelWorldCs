import React, { ReactNode } from 'react';
declare type State = {
    isClient: boolean;
};
declare type PropsFromState = {
    dashboard: {
        component?: string;
    };
};
declare class Dashboard extends React.Component<PropsFromState, State> {
    constructor(props: PropsFromState);
    componentDidMount(): void;
    render(): ReactNode;
}
declare const _default: React.ComponentType<{
    ref?: React.LegacyRef<Dashboard> | undefined;
    key?: React.Key | null | undefined;
    context?: React.Context<import("react-redux").ReactReduxContextValue<any, import("redux").AnyAction>> | undefined;
    store?: import("redux").Store<any, import("redux").AnyAction> | undefined;
} & {
    OriginalComponent?: React.ComponentType<{
        ref?: React.LegacyRef<Dashboard> | undefined;
        key?: React.Key | null | undefined;
        context?: React.Context<import("react-redux").ReactReduxContextValue<any, import("redux").AnyAction>> | undefined;
        store?: import("redux").Store<any, import("redux").AnyAction> | undefined;
    }> | undefined;
}>;
export default _default;
