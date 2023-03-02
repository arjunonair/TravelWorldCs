"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPropertyPermitted = exports.filterRecordParams = void 0;

var _utils = require("../../../utils");

const filterRecordParams = function (record, options = {}) {
  if (options.includeParams && record) {
    return { ...record,
      params: _utils.flat.selectParams(record.params || {}, options.includeParams)
    };
  }

  return record;
};

exports.filterRecordParams = filterRecordParams;

const isPropertyPermitted = (propertyName, options = {}) => {
  const {
    includeParams
  } = options;

  if (includeParams) {
    const parts = _utils.flat.pathToParts(propertyName, {
      skipArrayIndexes: true
    });

    return parts.some(part => includeParams.includes(part));
  }

  return true;
};

exports.isPropertyPermitted = isPropertyPermitted;