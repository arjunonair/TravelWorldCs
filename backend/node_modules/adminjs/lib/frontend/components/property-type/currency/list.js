"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _formatValue = _interopRequireDefault(require("./format-value"));

var _allowOverride = _interopRequireDefault(require("../../../hoc/allow-override"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const List = props => {
  const {
    property,
    record
  } = props;
  const value = (0, _formatValue.default)(record.params[property.path], property.props);
  return /*#__PURE__*/_react.default.createElement("span", null, value);
};

var _default = (0, _allowOverride.default)(List, 'DefaultCurrencyListProperty');

exports.default = _default;