/**
 *
 * Generates class name for given component. It is used by AdminJS core to append namespaced
 * classes.
 *
 * ### example
 *
 * ```javascript
 * import { cssClass } from '@adminjs/design-system'
 *
 * cssClass('Icon', 'my-regular-class-name')
 * // returns: 'adminjs_Icon my-regular-class-name'
 * ```
 *
 *
 * @param {string | Array<string>} className
 * @param {string}                [regularClass]
 * @memberof module:@adminjs/design-system
 */
declare const cssClass: (className: string | Array<string>, regularClass?: string | undefined) => string;
export { cssClass as default, cssClass, };
