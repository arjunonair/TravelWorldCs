"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _designSystem = require("@adminjs/design-system");

var _mapValue = _interopRequireDefault(require("./map-value"));

var _allowOverride = _interopRequireDefault(require("../../../hoc/allow-override"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const boolValue = s => {
  if (/true/i.test(s)) {
    return true;
  }

  return false;
};

const Filter = props => {
  const {
    property,
    filter = {},
    onChange
  } = props;
  const value = typeof filter[property.path] === 'undefined' ? '' : boolValue(filter[property.path]);
  const options = [{
    value: true,
    label: (0, _mapValue.default)(true)
  }, {
    value: false,
    label: (0, _mapValue.default)(false)
  }];
  const selected = options.find(o => o.value === value);

  const handleChange = s => {
    const newValue = s ? s.value : undefined;
    onChange(property.path, newValue);
  };

  return /*#__PURE__*/_react.default.createElement(_designSystem.FormGroup, null, /*#__PURE__*/_react.default.createElement(_designSystem.Label, null, property.label), /*#__PURE__*/_react.default.createElement(_designSystem.Select, {
    variant: "filter",
    value: typeof selected === 'undefined' ? '' : selected,
    isClearable: true,
    options: options,
    onChange: handleChange
  }));
};

var _default = (0, _allowOverride.default)(Filter, 'DefaultBooleanFilterProperty');

exports.default = _default;