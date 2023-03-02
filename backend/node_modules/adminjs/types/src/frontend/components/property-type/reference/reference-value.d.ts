import React from 'react';
import { ShowPropertyProps } from '../base-property-props';
declare type Props = Pick<ShowPropertyProps, 'property' | 'record'>;
declare const _default: React.ComponentType<Props & {
    OriginalComponent?: React.ComponentType<Props> | undefined;
}>;
export default _default;
