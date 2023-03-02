"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertToSubProperty = convertToSubProperty;

var _constants = require("../../../../utils/flat/constants");

function convertToSubProperty(property, subProperty) {
  const [subPropertyPath] = subProperty.name.split(_constants.DELIMITER).slice(-1);
  return { ...subProperty,
    path: [property.path, subPropertyPath].join(_constants.DELIMITER)
  };
}