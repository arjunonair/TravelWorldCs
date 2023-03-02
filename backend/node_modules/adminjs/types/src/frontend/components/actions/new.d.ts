import React from 'react';
import { ActionProps } from './action.props';
declare const OverridableNew: React.ComponentType<ActionProps & {
    OriginalComponent?: React.ComponentType<ActionProps> | undefined;
}>;
export { OverridableNew as default, OverridableNew as New, };
