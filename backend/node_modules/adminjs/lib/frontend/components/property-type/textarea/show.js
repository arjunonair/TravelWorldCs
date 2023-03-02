"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _designSystem = require("@adminjs/design-system");

var _allowOverride = _interopRequireDefault(require("../../../hoc/allow-override"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Show = props => {
  const {
    property,
    record
  } = props;
  const value = record.params[property.path] || '';
  return /*#__PURE__*/_react.default.createElement(_designSystem.ValueGroup, {
    label: property.label
  }, value.split(/(?:\r\n|\r|\n)/g).map((line, i) =>
  /*#__PURE__*/
  // eslint-disable-next-line react/no-array-index-key
  _react.default.createElement(_react.default.Fragment, {
    key: i
  }, line, /*#__PURE__*/_react.default.createElement("br", null))));
};

var _default = (0, _allowOverride.default)(Show, 'DefaultTextareaShowProperty');

exports.default = _default;