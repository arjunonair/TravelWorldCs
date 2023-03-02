import { Theme, ThemeOverride } from './default-theme.interface';
/**
 * Applies new styles to the default theme
 *
 * ### Example
 *
 * ```jsx
 * import { combineStyles } from '@adminjs/design-system`
 *
 * const myTheme = combineStyles({
 *   colors: {
 *     primary100: '#000'
 *   }
 * })
 * ```
 *
 * @param   {Partial<Theme>}         newTheme
 * @memberof module:@adminjs/design-system
 *
 * @return  {Theme}
 */
declare const combineStyles: (newTheme: ThemeOverride) => Theme;
export { combineStyles };
