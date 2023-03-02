import React from 'react';
declare type Props = {
    ItemComponent: typeof React.Component;
};
declare const _default: React.ComponentType<Props & import("../base-property-props").BasePropertyProps & {
    onChange: import("../base-property-props").OnPropertyChange;
    record: import("../../..").RecordJSON;
} & {
    OriginalComponent?: React.ComponentType<Props & import("../base-property-props").BasePropertyProps & {
        onChange: import("../base-property-props").OnPropertyChange;
        record: import("../../..").RecordJSON;
    }> | undefined;
}>;
export default _default;
