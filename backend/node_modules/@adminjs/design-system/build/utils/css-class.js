"use strict";
// eslint-disable-next-line import/prefer-default-export
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssClass = exports.default = void 0;
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
const cssClass = (className, regularClass) => {
    let names = [];
    if (className.join) {
        names = className;
    }
    else {
        names = [className];
    }
    const parsed = names.map((name) => `adminjs_${name}`);
    if (regularClass) {
        parsed.push(regularClass);
    }
    return parsed.join(' ');
};
exports.default = cssClass;
exports.cssClass = cssClass;
