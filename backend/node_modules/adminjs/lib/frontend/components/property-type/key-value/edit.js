"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _designSystem = require("@adminjs/design-system");

var _propertyLabel = require("../utils/property-label");

var _flat = require("../../../../utils/flat");

var _useTranslation = require("../../../hooks/use-translation");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const EditKeyValuePair = props => {
  var _property$props, _property$props2;

  const {
    onKeyChange,
    onValueChange,
    onRemoveItem,
    property,
    objectValue,
    objectKey,
    error
  } = props;
  const {
    tm
  } = (0, _useTranslation.useTranslation)();
  const [currentValue, setValue] = (0, _react.useState)(objectValue ?? '');
  const [currentKey, setKey] = (0, _react.useState)(objectKey ?? '');
  return /*#__PURE__*/_react.default.createElement(_designSystem.Box, {
    flex: true,
    mb: "lg"
  }, /*#__PURE__*/_react.default.createElement(_designSystem.Box, {
    flex: true,
    justifyContent: "space-between",
    flexGrow: 1,
    flexShrink: 0
  }, /*#__PURE__*/_react.default.createElement(_designSystem.FormGroup, {
    error: Boolean(error),
    mr: "lg",
    mb: "0px"
  }, /*#__PURE__*/_react.default.createElement(_designSystem.Input, _extends({
    placeholder: tm('keyPlaceholder'),
    onChange: e => setKey(e.target.value),
    onBlur: () => onKeyChange(objectKey, currentKey),
    onKeyDown: e => e.keyCode === 13 && onKeyChange(objectKey, currentKey),
    value: currentKey
  }, ((_property$props = property.props) === null || _property$props === void 0 ? void 0 : _property$props.keyInputProps) ?? {})), error && /*#__PURE__*/_react.default.createElement(_designSystem.FormMessage, null, error.message)), /*#__PURE__*/_react.default.createElement(_designSystem.FormGroup, {
    mb: "0px"
  }, /*#__PURE__*/_react.default.createElement(_designSystem.Input, _extends({
    placeholder: tm('valuePlaceholder'),
    onChange: e => setValue(e.target.value),
    onBlur: () => onValueChange(currentKey, currentValue),
    onKeyDown: e => e.keyCode === 13 && onValueChange(currentKey, currentValue),
    value: currentValue,
    disabled: !objectKey
  }, ((_property$props2 = property.props) === null || _property$props2 === void 0 ? void 0 : _property$props2.valueInputProps) ?? {})))), /*#__PURE__*/_react.default.createElement(_designSystem.Button, {
    rounded: true,
    ml: "sm",
    "data-testid": "delete-item",
    type: "button",
    size: "icon",
    onClick: () => onRemoveItem(currentKey),
    variant: "danger",
    flexGrow: 0,
    flexShrink: 1
  }, /*#__PURE__*/_react.default.createElement(_designSystem.Icon, {
    icon: "TrashCan"
  })));
};

const Edit = props => {
  const {
    property,
    record,
    onChange,
    resource
  } = props;
  const {
    tm,
    tb
  } = (0, _useTranslation.useTranslation)();
  const [objectValue, setObjectValue] = (0, _react.useState)(_flat.flat.get(record.params, property.path) ?? {});

  const handleKeyChange = (oldKey, newKey) => {
    if (oldKey === newKey) return;
    const tmpValue = objectValue[oldKey]; // eslint-disable-next-line @typescript-eslint/no-unused-vars

    const {
      [oldKey]: _removedKey,
      ...objectCopy
    } = objectValue;
    objectCopy[newKey] = tmpValue ?? '';
    setObjectValue(parseObjectValue(objectCopy));
  };

  const handleValueChange = (key, value) => {
    objectValue[key] = value;
    setObjectValue(parseObjectValue({ ...objectValue
    }));
  };

  const parseObjectValue = obj => Object.entries(obj).reduce((memo, [k, v]) => {
    if (!k || !k.length) return memo;
    memo[k] = v;
    return memo;
  }, {});
  /**
   * This is used to prevent empty/duplicate keys from being added to JSON
   */


  const getNextKey = previousId => {
    const nextId = previousId ? previousId + 1 : Object.keys(objectValue ?? {}).length + 1;
    const nextKey = `${tm('initialKey', resource.id, {
      number: nextId
    })}`;

    if (objectValue[nextKey] !== undefined) {
      return getNextKey(nextId);
    }

    return nextKey;
  };

  const addNewKeyValuePair = event => {
    event.preventDefault();
    const key = getNextKey();
    objectValue[key] = '';
    setObjectValue(parseObjectValue({ ...objectValue
    }));
  };

  const handleRemoveItem = key => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {
      [key]: _removedKey,
      ...objectCopy
    } = objectValue;
    setObjectValue(parseObjectValue(objectCopy));
  };

  (0, _react.useEffect)(() => {
    onChange(property.path, objectValue);
  }, [objectValue]);
  const error = record.errors && record.errors[property.path];

  if (property.description === undefined) {
    property.description = tm('keyValuePropertyDefaultDescription', resource.id);
  }

  return /*#__PURE__*/_react.default.createElement(_designSystem.FormGroup, {
    error: !!error
  }, /*#__PURE__*/_react.default.createElement(_propertyLabel.PropertyLabel, {
    property: property
  }), /*#__PURE__*/_react.default.createElement(_designSystem.Section, property.props, Object.entries(objectValue).map(([key, value]) => /*#__PURE__*/_react.default.createElement(EditKeyValuePair, {
    key: key,
    property: property,
    objectValue: value,
    objectKey: key,
    onKeyChange: handleKeyChange,
    onValueChange: handleValueChange,
    onRemoveItem: handleRemoveItem,
    error: record.errors[`${property.path}${_flat.flat.DELIMITER}${key}`]
  })), /*#__PURE__*/_react.default.createElement(_designSystem.Button, {
    mt: "lg",
    variant: "primary",
    onClick: addNewKeyValuePair
  }, tb('addNewItem', resource.id))), /*#__PURE__*/_react.default.createElement(_designSystem.FormMessage, null, error && error.message));
};

var _default = Edit;
exports.default = _default;