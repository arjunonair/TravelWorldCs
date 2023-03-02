import React, { ReactNode } from 'react';
import { NoticeMessageInState } from '../../store/store';
export declare type NotifyProgress = (options: {
    noticeId: string;
    progress: number;
}) => void;
export declare type NoticeElementProps = {
    notice: NoticeMessageInState;
    drop: () => any;
    notifyProgress: NotifyProgress;
};
export declare type NoticeElementState = {
    progress: number;
};
export declare class NoticeElement extends React.Component<NoticeElementProps, NoticeElementState> {
    private timer;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): ReactNode;
}
declare const OverridableConnectedNoticeBox: React.ComponentType<{
    context?: React.Context<import("react-redux").ReactReduxContextValue<any, import("redux").AnyAction>> | undefined;
    store?: import("redux").Store<any, import("redux").AnyAction> | undefined;
} & {
    OriginalComponent?: React.ComponentType<{
        context?: React.Context<import("react-redux").ReactReduxContextValue<any, import("redux").AnyAction>> | undefined;
        store?: import("redux").Store<any, import("redux").AnyAction> | undefined;
    }> | undefined;
}>;
export { OverridableConnectedNoticeBox as default, OverridableConnectedNoticeBox as NoticeBox, };
