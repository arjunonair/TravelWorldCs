import React from 'react';
import { ShowPropertyProps } from '../base-property-props';
declare type Props = ShowPropertyProps & {
    ItemComponent: typeof React.Component;
};
declare const _default: React.ComponentType<ShowPropertyProps & {
    ItemComponent: typeof React.Component;
} & {
    OriginalComponent?: React.ComponentType<Props> | undefined;
}>;
export default _default;
