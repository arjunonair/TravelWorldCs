import React from 'react';
import { BasePropertyProps } from '../base-property-props';
declare type ItemComponentProps = BasePropertyProps;
interface Props extends Record<string, unknown> {
    ItemComponent: React.FC<ItemComponentProps>;
}
declare const _default: React.ComponentType<Props & BasePropertyProps & {
    onChange: import("../base-property-props").OnPropertyChange;
    record: import("../../..").RecordJSON;
} & {
    OriginalComponent?: React.ComponentType<Props & BasePropertyProps & {
        onChange: import("../base-property-props").OnPropertyChange;
        record: import("../../..").RecordJSON;
    }> | undefined;
}>;
export default _default;
