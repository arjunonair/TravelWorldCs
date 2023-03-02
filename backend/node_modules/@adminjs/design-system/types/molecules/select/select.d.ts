import { FC } from 'react';
import { Props } from 'react-select';
interface SelectProps extends Props {
    value: any;
    onChange?: (selected: any) => void;
    variant?: 'default' | 'filter';
}
export declare const Select: FC<SelectProps>;
export default Select;
