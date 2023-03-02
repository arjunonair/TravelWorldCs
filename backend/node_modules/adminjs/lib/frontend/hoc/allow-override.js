"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allowOverride = exports.default = allowOverride;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
function allowOverride(OriginalComponent, name) {
  const WrapperComponent = props => {
    let Component = OriginalComponent;
    /**
     * @new in version 6.3
     *
     * This adds support for future theme-specific components via their "theme.bundle.js"
     *
     */

    if (typeof window !== 'undefined') {
      var _window$AdminJS, _window$AdminJS$UserC, _THEME, _THEME$Components;

      Component = ((_window$AdminJS = window.AdminJS) === null || _window$AdminJS === void 0 ? void 0 : (_window$AdminJS$UserC = _window$AdminJS.UserComponents) === null || _window$AdminJS$UserC === void 0 ? void 0 : _window$AdminJS$UserC[name]) ?? ((_THEME = window.THEME) === null || _THEME === void 0 ? void 0 : (_THEME$Components = _THEME.Components) === null || _THEME$Components === void 0 ? void 0 : _THEME$Components[name]) ?? OriginalComponent;
    }

    return /*#__PURE__*/_react.default.createElement(Component, _extends({}, props, {
      OriginalComponent: OriginalComponent
    }));
  };

  return WrapperComponent;
}