import { CurrencyInputProps } from '@adminjs/design-system';
import React from 'react';
export declare type CurrencyInputWrapperProps = {
    id: string;
    initial: string;
    options?: CurrencyInputProps;
    onChange: (value: string | undefined) => void;
};
declare const OverridableCurrencyInputWrapper: React.ComponentType<CurrencyInputWrapperProps & {
    OriginalComponent?: React.ComponentType<CurrencyInputWrapperProps> | undefined;
}>;
export { OverridableCurrencyInputWrapper as CurrencyInputWrapper, OverridableCurrencyInputWrapper as default, };
