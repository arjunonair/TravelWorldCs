import React from 'react';
import { PropertyJSON } from '../../../interfaces/property-json';
import { EditPropertyProps } from '../base-property-props';
import { RecordError } from '../../../../backend/utils/errors';
export declare type EditKeyValuePairProps = {
    onKeyChange: (key: string, newKey: string) => void;
    onValueChange: (key: string, newValue: string) => void;
    onRemoveItem: (key: string) => void;
    objectValue: string;
    objectKey: string;
    property: PropertyJSON;
    error?: RecordError;
};
declare const Edit: React.FC<EditPropertyProps>;
export default Edit;
