import React from 'react';
import { ResourceJSON } from '../../interfaces';
export declare type FilterProps = {
    resource: ResourceJSON;
    toggleFilter: () => void;
    isVisible: boolean;
};
declare const OverridableFilterDrawer: React.ComponentType<FilterProps & {
    OriginalComponent?: React.ComponentType<FilterProps> | undefined;
}>;
export { OverridableFilterDrawer as default, OverridableFilterDrawer as FilterDrawer, };
