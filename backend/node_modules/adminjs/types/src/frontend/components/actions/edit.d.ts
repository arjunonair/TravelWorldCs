import React from 'react';
import { ActionProps } from './action.props';
declare const OverridableEdit: React.ComponentType<ActionProps & {
    OriginalComponent?: React.ComponentType<ActionProps> | undefined;
}>;
export { OverridableEdit as default, OverridableEdit as Edit, };
