import React from 'react';
import { ActionProps } from './action.props';
declare const OverridableList: React.ComponentType<ActionProps & {
    OriginalComponent?: React.ComponentType<ActionProps> | undefined;
}>;
export { OverridableList as default, OverridableList as List, };
