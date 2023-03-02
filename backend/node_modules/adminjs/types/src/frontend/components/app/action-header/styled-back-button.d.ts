import React from 'react';
export declare type StyledBackButtonProps = {
    showInDrawer: boolean;
};
declare const OverridableStyledBackButton: React.ComponentType<StyledBackButtonProps & {
    OriginalComponent?: React.ComponentType<StyledBackButtonProps> | undefined;
}>;
export { OverridableStyledBackButton as default, OverridableStyledBackButton as StyledBackButton, };
