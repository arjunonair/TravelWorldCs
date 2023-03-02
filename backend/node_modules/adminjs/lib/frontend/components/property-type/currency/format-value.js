"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _designSystem = require("@adminjs/design-system");

const optionsKeys = ['value', 'decimalSeparator', 'groupSeparator', 'disableGroupSeparators', 'intlConfig', 'decimalScale', 'prefix', 'suffix'];

const pickFormatOptions = props => {
  const pickedProps = Object.keys(props).reduce((acc, curr) => {
    if (optionsKeys.includes(curr)) {
      if (props[curr] !== null && props[curr] !== undefined) {
        acc[curr] = props[curr].toString();
      }
    }

    return acc;
  }, {});
  return pickedProps;
};

const formatValue = (value, props = {}) => {
  const formatOptions = pickFormatOptions({
    value,
    ...props
  });
  return (0, _designSystem.formatCurrencyProperty)(formatOptions);
};

var _default = formatValue;
exports.default = _default;