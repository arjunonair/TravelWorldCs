import React from 'react';
import { VersionProps } from '../../../adminjs-options.interface';
export declare type Props = {
    versions: VersionProps;
};
declare const OverridableVersion: React.ComponentType<Props & {
    OriginalComponent?: React.ComponentType<Props> | undefined;
}>;
export { OverridableVersion as default, OverridableVersion as Version, };
