"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _defaultPropertyValue = _interopRequireDefault(require("./default-property-value"));

var _allowOverride = _interopRequireDefault(require("../../../hoc/allow-override"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const List = props => /*#__PURE__*/_react.default.createElement(_defaultPropertyValue.default, props);

var _default = (0, _allowOverride.default)(List, 'DefaultListProperty');

exports.default = _default;