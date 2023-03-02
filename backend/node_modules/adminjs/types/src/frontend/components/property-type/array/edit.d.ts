import React from 'react';
import { EditPropertyPropsInArray } from '../base-property-props';
declare const OverridableEdit: React.ComponentType<Required<EditPropertyPropsInArray> & {
    OriginalComponent?: React.ComponentType<Required<EditPropertyPropsInArray>> | undefined;
}>;
export { OverridableEdit as default, OverridableEdit as Edit, };
