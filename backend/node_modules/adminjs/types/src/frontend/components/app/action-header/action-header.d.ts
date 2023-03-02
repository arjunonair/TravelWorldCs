import React from 'react';
import { ActionHeaderProps } from './action-header-props';
declare const OverridableActionHeader: React.ComponentType<ActionHeaderProps & {
    OriginalComponent?: React.ComponentType<ActionHeaderProps> | undefined;
}>;
export { OverridableActionHeader as default, OverridableActionHeader as ActionHeader, };
