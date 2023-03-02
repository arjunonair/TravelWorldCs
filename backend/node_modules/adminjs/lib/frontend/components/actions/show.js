"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Show = void 0;

var _designSystem = require("@adminjs/design-system");

var _react = _interopRequireDefault(require("react"));

var _allowOverride = _interopRequireDefault(require("../../hoc/allow-override"));

var _utils = require("../../utils");

var _actionHeader = _interopRequireDefault(require("../app/action-header/action-header"));

var _propertyType = _interopRequireDefault(require("../property-type"));

var _layoutElementRenderer = _interopRequireDefault(require("./utils/layout-element-renderer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * @name ShowAction
 * @category Actions
 * @description Shows a given record.
 * @component
 * @private
 */
const Show = props => {
  const {
    resource,
    record,
    action
  } = props;
  const properties = resource.showProperties;
  const contentTag = (0, _utils.getActionElementCss)(resource.id, action.name, 'drawer-content');
  return /*#__PURE__*/_react.default.createElement(_designSystem.DrawerContent, {
    "data-css": contentTag
  }, action !== null && action !== void 0 && action.showInDrawer ? /*#__PURE__*/_react.default.createElement(_actionHeader.default, props) : null, action.layout ? action.layout.map((layoutElement, i) => /*#__PURE__*/_react.default.createElement(_layoutElementRenderer.default // eslint-disable-next-line react/no-array-index-key
  , _extends({
    key: i,
    layoutElement: layoutElement
  }, props, {
    where: "show"
  }))) : properties.map(property => /*#__PURE__*/_react.default.createElement(_propertyType.default, {
    key: property.propertyPath,
    where: "show",
    property: property,
    resource: resource,
    record: record
  })));
};

const OverridableShow = (0, _allowOverride.default)(Show, 'DefaultShowAction');
exports.Show = exports.default = OverridableShow;