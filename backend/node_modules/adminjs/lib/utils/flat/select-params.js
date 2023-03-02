"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectParams = void 0;

var _propertyKeyRegex = require("./property-key-regex");

/**
 * @load ./select-params.doc.md
 * @memberof module:flat
 * @param {FlattenParams} params
 * @param {string | Array<string>} properties
 * @param {GetOptions} [options]
 * @returns {FlattenParams}
 */
const selectParams = (params, properties, options) => {
  const propertyArray = Array.isArray(properties) ? properties : [properties];
  const selected = propertyArray.filter(propertyPath => !!propertyPath).reduce((globalMemo, propertyPath) => {
    const regex = (0, _propertyKeyRegex.propertyKeyRegex)(propertyPath, options);
    const filtered = Object.keys(params) // filter all keys which starts with property path
    .filter(key => key.match(regex)).reduce((memo, key) => {
      memo[key] = params[key];
      return memo;
    }, {});
    return { ...globalMemo,
      ...filtered
    };
  }, {});
  return selected;
};

exports.selectParams = selectParams;