"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareParams = void 0;

var _flat = require("../flat");

var _convertNestedParam = require("./convert-nested-param");

var _convertParam = require("./convert-param");

const prepareParams = (params, resource) => {
  const properties = resource.properties();
  const preparedParams = {};

  for (const property of properties) {
    var _resource$_decorated;

    let param = _flat.flat.get(params, property.path());

    const key = property.path();
    const propertyDecorator = (_resource$_decorated = resource._decorated) === null || _resource$_decorated === void 0 ? void 0 : _resource$_decorated.properties[key].toJSON(); // eslint-disable-next-line no-continue

    if (param === undefined || param === null) continue;

    if (property.type() !== 'mixed') {
      if (propertyDecorator !== null && propertyDecorator !== void 0 && propertyDecorator.isArray) {
        preparedParams[key] = param.map(p => (0, _convertParam.convertParam)(p, property.type()));
      } else {
        preparedParams[key] = (0, _convertParam.convertParam)(param, property.type());
      }
    } else {
      if (param !== null && propertyDecorator !== null && propertyDecorator !== void 0 && propertyDecorator.subProperties.length) {
        const {
          subProperties
        } = propertyDecorator;

        for (const subProperty of subProperties) {
          if (propertyDecorator.isArray) {
            param = param.map(p => (0, _convertNestedParam.convertNestedParam)(p, subProperty));
          } else {
            param = (0, _convertNestedParam.convertNestedParam)(param, subProperty);
          }
        }
      }

      preparedParams[key] = param;
    }
  }

  return { ...params,
    ...preparedParams
  };
};

exports.prepareParams = prepareParams;