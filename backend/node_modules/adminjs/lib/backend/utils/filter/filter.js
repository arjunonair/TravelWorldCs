"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PARAM_SEPARATOR = exports.Filter = void 0;

var _flat = require("../../../utils/flat");

const PARAM_SEPARATOR = '~~';
exports.PARAM_SEPARATOR = PARAM_SEPARATOR;

/**
 * Filter object wrapping up selected filters.
 * @private
 */
class Filter {
  /**
   * Changes raw nested filters to form Object<path, value>.
   *
   * @example
   * const filters = {
   *  nested: {field: 'ala'},
   *  'dataField~~from': '2019-08-14'
   * }
   *
   * const normalized = Filter.normalizeFilters(filters)
   * // {
   * //   'nested.filter': 'ala',
   * //   'dataField': {from: '2019-08-14'}
   * // }
   *
   *
   * @param   {Object}  filters
   *
   * @return  {Object}
   */
  static normalizeKeys(filters) {
    return _flat.flat.unflatten(_flat.flat.flatten(filters), {
      delimiter: PARAM_SEPARATOR
    });
  }
  /**
   * @param   {Object<String,Object | String>}  filters   selected filters
   * @param   {BaseResource}                    resource    resource which is filtered
   */


  constructor(filters = {}, resource) {
    this.resource = resource;
    const normalized = Filter.normalizeKeys(filters);
    this.filters = Object.keys(normalized).reduce((memo, path) => {
      memo[path] = {
        path,
        property: this.resource.property(path),
        value: normalized[path]
      };
      return memo;
    }, {});
  }
  /**
   * Returns filter for a given property key
   *
   * @param {String} key      property key
   * @returns {Filter.Property | undefined}
   */


  get(key) {
    return this.filters[key];
  }
  /**
   * Populates all filtered properties which refers to other resources
   */


  async populate(context) {
    const keys = Object.keys(this.filters);

    for (let index = 0; index < keys.length; index += 1) {
      var _this$resource$decora;

      const key = keys[index];
      const referenceResource = (_this$resource$decora = this.resource.decorate().getPropertyByKey(key)) === null || _this$resource$decora === void 0 ? void 0 : _this$resource$decora.reference();

      if (referenceResource) {
        const value = this.filters[key].value;
        this.filters[key].populated = await referenceResource.findOne(value, context);
      }
    }

    return this;
  }

  reduce(callback, initial) {
    return Object.values(this.filters).reduce(callback, initial || {});
  }

  isVisible() {
    return !!Object.keys(this.filters).length;
  }

}

exports.Filter = Filter;
var _default = Filter;
exports.default = _default;