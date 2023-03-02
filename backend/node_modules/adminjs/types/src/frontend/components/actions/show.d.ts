import React from 'react';
import { ActionProps } from './action.props';
declare const OverridableShow: React.ComponentType<ActionProps & {
    OriginalComponent?: React.ComponentType<ActionProps> | undefined;
}>;
export { OverridableShow as default, OverridableShow as Show, };
