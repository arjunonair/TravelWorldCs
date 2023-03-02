"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _designSystem = require("@adminjs/design-system");

var _flat = require("../../../../utils/flat");

var _useTranslation = require("../../../hooks/use-translation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ShowKeyValuePair = props => {
  const {
    objectValue,
    objectKey
  } = props;
  const {
    tm
  } = (0, _useTranslation.useTranslation)();
  return /*#__PURE__*/_react.default.createElement(_designSystem.Box, {
    flex: true,
    mb: "lg"
  }, /*#__PURE__*/_react.default.createElement(_designSystem.FormGroup, {
    mr: "lg",
    mb: "0px"
  }, /*#__PURE__*/_react.default.createElement(_designSystem.Input, {
    placeholder: tm('keyPlaceholder'),
    value: objectKey,
    disabled: true
  })), /*#__PURE__*/_react.default.createElement(_designSystem.FormGroup, {
    mb: "0px"
  }, /*#__PURE__*/_react.default.createElement(_designSystem.Input, {
    placeholder: tm('valuePlaceholder'),
    value: objectValue,
    disabled: true
  })));
};

const Show = props => {
  const {
    property,
    record
  } = props;
  const objectValue = _flat.flat.get(record.params, property.path) ?? {};
  return /*#__PURE__*/_react.default.createElement(_designSystem.ValueGroup, {
    label: property.label
  }, /*#__PURE__*/_react.default.createElement(_designSystem.Section, null, Object.entries(objectValue).map(([key, value]) => /*#__PURE__*/_react.default.createElement(ShowKeyValuePair, {
    key: key,
    objectValue: value,
    objectKey: key
  }))));
};

var _default = Show;
exports.default = _default;