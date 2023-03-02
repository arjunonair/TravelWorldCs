"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ListAction = void 0;

var _flat = require("../../../utils/flat");

var _sortSetter = _interopRequireDefault(require("../../services/sort-setter/sort-setter"));

var _filter = _interopRequireDefault(require("../../utils/filter/filter"));

var _populator = _interopRequireDefault(require("../../utils/populator/populator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PER_PAGE_LIMIT = 500;
/**
 * @implements Action
 * @category Actions
 * @module ListAction
 * @description
 * Returns selected Records in a list form
 * @private
 */

const ListAction = {
  name: 'list',
  isVisible: true,
  actionType: 'resource',
  showFilter: true,
  showInDrawer: false,

  /**
   * Responsible for returning data for all records.
   *
   * To invoke this action use {@link ApiClient#recordAction}
   *
   * @implements Action#handler
   * @memberof module:ListAction
   * @return {Promise<ListActionResponse>} records with metadata
   */
  handler: async (request, response, context) => {
    var _sort, _sort2;

    const {
      query
    } = request;

    const {
      sortBy,
      direction,
      filters = {}
    } = _flat.flat.unflatten(query || {});

    const {
      resource,
      _admin
    } = context;

    let {
      page,
      perPage
    } = _flat.flat.unflatten(query || {});

    if (perPage) {
      perPage = +perPage > PER_PAGE_LIMIT ? PER_PAGE_LIMIT : +perPage;
    } else {
      var _admin$options$settin;

      perPage = ((_admin$options$settin = _admin.options.settings) === null || _admin$options$settin === void 0 ? void 0 : _admin$options$settin.defaultPerPage) ?? 10;
    }

    page = Number(page) || 1;
    const listProperties = resource.decorate().getListProperties();
    const firstProperty = listProperties.find(p => p.isSortable());
    let sort;

    if (firstProperty) {
      sort = (0, _sortSetter.default)({
        sortBy,
        direction
      }, firstProperty.name(), resource.decorate().options);
    }

    const filter = await new _filter.default(filters, resource).populate(context);
    const {
      currentAdmin
    } = context;
    const records = await resource.find(filter, {
      limit: perPage,
      offset: (page - 1) * perPage,
      sort
    }, context);
    const populatedRecords = await (0, _populator.default)(records, context); // eslint-disable-next-line no-param-reassign

    context.records = populatedRecords;
    const total = await resource.count(filter, context);
    return {
      meta: {
        total,
        perPage,
        page,
        direction: (_sort = sort) === null || _sort === void 0 ? void 0 : _sort.direction,
        sortBy: (_sort2 = sort) === null || _sort2 === void 0 ? void 0 : _sort2.sortBy
      },
      records: populatedRecords.map(r => r.toJSON(currentAdmin))
    };
  }
};
exports.ListAction = ListAction;
var _default = ListAction;
/**
 * Response returned by List action
 * @memberof module:ListAction
 * @alias ListAction
 */

exports.default = _default;