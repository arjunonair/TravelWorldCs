import React from 'react';
import { RecordJSON, ResourceJSON } from '../../../interfaces';
declare type SelectedRecordsProps = {
    resource: ResourceJSON;
    selectedRecords?: Array<RecordJSON>;
};
declare const OverridableSelectedRecords: React.ComponentType<SelectedRecordsProps & {
    OriginalComponent?: React.ComponentType<SelectedRecordsProps> | undefined;
}>;
export { OverridableSelectedRecords as default, OverridableSelectedRecords as SelectedRecords, };
