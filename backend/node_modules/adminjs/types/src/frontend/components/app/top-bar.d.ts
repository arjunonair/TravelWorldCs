import React from 'react';
declare type Props = {
    toggleSidebar: () => void;
};
declare const OverridableTopbar: React.ComponentType<Props & {
    OriginalComponent?: React.ComponentType<Props> | undefined;
}>;
export { OverridableTopbar as default, OverridableTopbar as TopBar };
