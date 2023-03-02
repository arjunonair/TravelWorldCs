"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _designSystem = require("@adminjs/design-system");

var _referenceValue = _interopRequireDefault(require("./reference-value"));

var _allowOverride = _interopRequireDefault(require("../../../hoc/allow-override"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Show = props => {
  const {
    property,
    record
  } = props;
  return /*#__PURE__*/_react.default.createElement(_designSystem.ValueGroup, {
    label: property.label
  }, /*#__PURE__*/_react.default.createElement(_referenceValue.default, {
    property: property,
    record: record
  }));
};

var _default = (0, _allowOverride.default)(Show, 'DefaultReferenceShowProperty');

exports.default = _default;