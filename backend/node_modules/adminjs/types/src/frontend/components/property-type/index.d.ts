/// <reference types="react" />
import CleanPropertyComponent from './clean-property-component';
import { BasePropertyComponentProps } from './base-property-props';
declare type BasePropertyComponentType = React.FC<BasePropertyComponentProps> & {
    DefaultType: any;
    Boolean: any;
    DateTime: any;
    RichText: any;
    Reference: any;
    TextArea: any;
    Password: any;
};
declare const BasePropertyComponentExtended: BasePropertyComponentType;
export { BasePropertyComponentExtended as default, BasePropertyComponentExtended as BasePropertyComponent, CleanPropertyComponent, };
export * from './base-property-props';
export * from './utils';
