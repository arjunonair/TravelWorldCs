import React from 'react';
import { BasePropertyJSON } from '../../../interfaces';
/**
 * @memberof RecordsTableHeader
 * @alias RecordsTableHeaderProps
 */
export declare type RecordsTableHeaderProps = {
    /**
     * Property which should be treated as a Title Property
     */
    titleProperty: BasePropertyJSON;
    /**
     * All properties which should be presented
     */
    properties: Array<BasePropertyJSON>;
    /**
     * Name of the property which should be marked as currently sorted by
     */
    sortBy?: string;
    /**
     * Sort direction
     */
    direction?: 'asc' | 'desc';
    /**
     * Handler function invoked when checkbox is clicked. If given extra column
     * with checkbox will be rendered
     */
    onSelectAll?: () => any;
    /**
     * Indicates if "bulk" checkbox should be checked
     */
    selectedAll?: boolean;
};
declare const OverridableRecordsTableHeader: React.ComponentType<RecordsTableHeaderProps & {
    OriginalComponent?: React.ComponentType<RecordsTableHeaderProps> | undefined;
}>;
export { OverridableRecordsTableHeader as default, OverridableRecordsTableHeader as RecordsTableHeader, };
