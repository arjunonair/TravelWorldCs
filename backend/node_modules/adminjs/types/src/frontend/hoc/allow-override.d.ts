import { ComponentType } from 'react';
import { OverridableComponent } from '../utils/overridable-component';
/**
 * @private
 *
 * @classdesc
 * Overrides one of the component form AdminJS core when user pass its name to
 * {@link ComponentLoader.add} or {@link ComponentLoader.override} method.
 *
 * If case of being overridden, component receives additional prop: `OriginalComponent`
 *
 * @example
 * new ComponentLoader().override('SidebarFooter', MySidebarFooter)
 */
declare function allowOverride<P extends Record<string, unknown>>(OriginalComponent: ComponentType<P>, name: OverridableComponent): ComponentType<P & {
    OriginalComponent?: ComponentType<P>;
}>;
export { allowOverride as default, allowOverride, };
