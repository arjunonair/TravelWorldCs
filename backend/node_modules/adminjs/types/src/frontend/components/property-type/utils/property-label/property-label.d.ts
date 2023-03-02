import { LabelProps } from '@adminjs/design-system';
import React from 'react';
import { PropertyJSON } from '../../../../interfaces';
export declare type PropertyLabelProps = {
    property: PropertyJSON;
    props?: LabelProps;
};
declare const OverridablePropertyLabel: React.ComponentType<PropertyLabelProps & {
    OriginalComponent?: React.ComponentType<PropertyLabelProps> | undefined;
}>;
export { OverridablePropertyLabel as default, OverridablePropertyLabel as PropertyLabel, };
