"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _designSystem = require("@adminjs/design-system");

var _apiClient = _interopRequireDefault(require("../../../utils/api-client"));

var _allowOverride = _interopRequireDefault(require("../../../hoc/allow-override"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Filter = props => {
  const {
    property,
    filter,
    onChange
  } = props;
  const [options, setOptions] = (0, _react.useState)([]);
  const api = new _apiClient.default();

  const handleChange = selected => {
    onChange(property.path, selected ? selected.value : '');
  };

  const loadOptions = async inputValue => {
    const records = await api.searchRecords({
      resourceId: property.reference,
      query: inputValue
    });
    const loadedOptions = records.map(r => ({
      value: r.id,
      label: r.title
    }));
    setOptions(loadedOptions);
    return loadedOptions;
  };

  const value = typeof filter[property.path] === 'undefined' ? '' : filter[property.path];
  const selected = (options || []).find(o => String(o.value) === String(value));
  return /*#__PURE__*/_react.default.createElement(_designSystem.FormGroup, null, /*#__PURE__*/_react.default.createElement(_designSystem.Label, null, property.label), /*#__PURE__*/_react.default.createElement(_designSystem.SelectAsync, {
    variant: "filter",
    value: typeof selected === 'undefined' ? '' : selected,
    isClearable: true,
    cacheOptions: true,
    loadOptions: loadOptions,
    onChange: handleChange,
    defaultOptions: true
  }));
};

var _default = (0, _allowOverride.default)(Filter, 'DefaultReferenceFilterProperty');

exports.default = _default;