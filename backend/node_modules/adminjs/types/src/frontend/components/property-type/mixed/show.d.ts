import React from 'react';
import { BasePropertyProps } from '../base-property-props';
interface Props extends Record<string, unknown> {
    ItemComponent: typeof React.Component;
}
declare const _default: React.ComponentType<Props & BasePropertyProps & {
    OriginalComponent?: React.ComponentType<Props & BasePropertyProps> | undefined;
}>;
export default _default;
