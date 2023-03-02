import { FC } from 'react';
import { BasePropertyProps } from './base-property-props';
/**
 * This component is the same as `BasePropertyComponent` but it will not render
 * custom components. Use this in your custom components to render the default
 * property component.
 *
 * This is useful if you want your custom component to appear custom only for
 * specific `where` value and default for all others.
 */
declare const CleanPropertyComponent: FC<BasePropertyProps>;
export default CleanPropertyComponent;
