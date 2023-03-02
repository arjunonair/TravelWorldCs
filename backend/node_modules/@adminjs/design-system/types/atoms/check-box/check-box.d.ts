import React from 'react';
export declare const CheckboxRadioContainer: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, {}, never>;
export declare type CheckBoxProps = React.HTMLProps<HTMLInputElement>;
/**
 * @typedef {object} CheckBoxProps
 * @alias CheckBoxProps
 * @memberof module:@adminjs/design-system.CheckBox
 * @property {string} [...] All props default to _checkbox_ html input like `onChange`,
 *                          `checked` etc.
 */
/**
 * @classdesc
 *
 * <img src="components/checkbox.png" />
 *
 * HTML CheckBox
 *
 * ### Usage
 *
 * ```javascript
 * import { CheckBox, CheckBoxProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-checkbox--default StoryBook}
 * @hideconstructor
 * @subcategory Atoms
 * @example
 * return (
 *   <Box p="xl">
 *      <CheckBox id="checkbox1"/>
 *      <Label inline htmlFor="checkbox1" ml="default">Some example label</Label>
 *   </Box>
 * )
 * @section design-system
 */
declare const CheckBox: React.FC<CheckBoxProps>;
export { CheckBox };
export default CheckBox;
