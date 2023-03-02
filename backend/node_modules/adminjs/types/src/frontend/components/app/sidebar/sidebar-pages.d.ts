import React from 'react';
import { ReduxState } from '../../../store/store';
declare type Props = {
    pages?: ReduxState['pages'];
};
declare const _default: React.ComponentType<Props & {
    OriginalComponent?: React.ComponentType<Props> | undefined;
}>;
export default _default;
