"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertNestedParam = void 0;

var _constants = require("./constants");

var _convertParam = require("./convert-param");

const convertNestedParam = (parentValue, subProperty) => {
  const path = subProperty.propertyPath.split(_constants.DELIMITER).slice(-1)[0];
  const {
    type = 'string'
  } = subProperty;
  let value = parentValue[path];

  if (type === 'mixed' && value) {
    const nestedSubProperties = subProperty.subProperties;

    for (const nestedSubProperty of nestedSubProperties) {
      if (subProperty.isArray) {
        value = [...value].map(element => convertNestedParam(element, nestedSubProperty));
      } else {
        value = convertNestedParam(value, nestedSubProperty);
      }
    }
  } else {
    value = (0, _convertParam.convertParam)(value, subProperty.type);
  }

  return { ...parentValue,
    [path]: value
  };
};

exports.convertNestedParam = convertNestedParam;