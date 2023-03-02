"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _designSystem = require("@adminjs/design-system");

var _allowOverride = _interopRequireDefault(require("../../../hoc/allow-override"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Filter = props => {
  const {
    property,
    onChange,
    filter
  } = props;

  const handleInputChange = event => {
    onChange(property.path, event.target.value);
  };

  const handleSelectChange = selected => {
    const value = selected ? selected.value : '';
    onChange(property.path, value);
  };

  const renderInput = () => {
    const filterKey = `filter-${property.path}`;
    const value = filter[property.path] || '';

    if (property.availableValues) {
      const selected = property.availableValues.find(av => av.value === value);
      return /*#__PURE__*/_react.default.createElement(_designSystem.Select, {
        variant: "filter",
        value: typeof selected === 'undefined' ? '' : selected,
        isClearable: true,
        options: property.availableValues,
        onChange: handleSelectChange
      });
    }

    return /*#__PURE__*/_react.default.createElement(_designSystem.Input, {
      name: filterKey,
      onChange: handleInputChange,
      value: value
    });
  };

  return /*#__PURE__*/_react.default.createElement(_designSystem.FormGroup, {
    variant: "filter"
  }, /*#__PURE__*/_react.default.createElement(_designSystem.Label, null, property.label), renderInput());
};

var _default = (0, _allowOverride.default)(Filter, 'DefaultFilterProperty');

exports.default = _default;