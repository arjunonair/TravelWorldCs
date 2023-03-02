import React from 'react';
import { RecordJSON, ResourceJSON } from '../../../interfaces';
import { ActionResponse } from '../../../../backend/actions/action.interface';
export declare type RecordInListProps = {
    resource: ResourceJSON;
    record: RecordJSON;
    actionPerformed?: (action: ActionResponse) => any;
    isLoading?: boolean;
    onSelect?: (record: RecordJSON) => void;
    isSelected?: boolean;
};
declare const OverridableRecordInList: React.ComponentType<RecordInListProps & {
    OriginalComponent?: React.ComponentType<RecordInListProps> | undefined;
}>;
export { OverridableRecordInList as default, OverridableRecordInList as RecordInList, };
