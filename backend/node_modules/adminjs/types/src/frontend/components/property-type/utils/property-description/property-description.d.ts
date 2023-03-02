import React from 'react';
import { PropertyJSON } from '../../../../interfaces';
export declare type PropertyDescriptionProps = {
    property: PropertyJSON;
};
declare const OverridablePropertyDescription: React.ComponentType<PropertyDescriptionProps & {
    OriginalComponent?: React.ComponentType<PropertyDescriptionProps> | undefined;
}>;
export { OverridablePropertyDescription as default, OverridablePropertyDescription as PropertyDescription, };
