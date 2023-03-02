"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestParser = exports.default = void 0;

var _paramsToFormData = require("../../../frontend/hooks/use-record/params-to-form-data");

/**
 * Takes the original ActionRequest and convert string values to a corresponding
 * types. It
 *
 * @param {ActionRequest} originalRequest
 * @param {BaseResource}  resource
 * @returns {ActionRequest}
 *
 * @private
 */
const requestParser = (originalRequest, resource) => {
  const {
    payload: originalPayload
  } = originalRequest;
  const payload = Object.entries(originalPayload || {}).reduce((memo, [path, formValue]) => {
    var _resource$_decorated;

    const property = (_resource$_decorated = resource._decorated) === null || _resource$_decorated === void 0 ? void 0 : _resource$_decorated.getPropertyByKey(path);
    let value = formValue;

    if (formValue === _paramsToFormData.FORM_VALUE_NULL) {
      value = null;
    }

    if (formValue === _paramsToFormData.FORM_VALUE_EMPTY_OBJECT) {
      value = {};
    }

    if (formValue === _paramsToFormData.FORM_VALUE_EMPTY_ARRAY) {
      value = [];
    }

    if (property) {
      if (property.type() === 'boolean') {
        if (value === 'true') {
          memo[path] = true;
          return memo;
        }

        if (value === 'false') {
          memo[path] = false;
          return memo;
        }

        if (value === '') {
          memo[path] = false;
          return memo;
        }
      }

      if (['date', 'datetime'].includes(property.type())) {
        if (value === '' || value === null) {
          memo[path] = null;
          return memo;
        }
      }

      if (property.type() === 'string') {
        const availableValues = property.availableValues();

        if (availableValues && !availableValues.includes(value) && value === '') {
          memo[path] = null;
          return memo;
        }
      }
    }

    memo[path] = value;
    return memo;
  }, {});
  return { ...originalRequest,
    payload
  };
};

exports.requestParser = requestParser;
var _default = requestParser;
exports.default = _default;