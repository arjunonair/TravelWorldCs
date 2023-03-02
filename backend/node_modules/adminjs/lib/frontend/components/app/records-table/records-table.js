"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RecordsTable = void 0;

var _designSystem = require("@adminjs/design-system");

var _react = _interopRequireDefault(require("react"));

var _allowOverride = _interopRequireDefault(require("../../../hoc/allow-override"));

var _utils = require("../../../utils");

var _noRecords = _interopRequireDefault(require("./no-records"));

var _recordInList = _interopRequireDefault(require("./record-in-list"));

var _recordsTableHeader = _interopRequireDefault(require("./records-table-header"));

var _selectedRecords = _interopRequireDefault(require("./selected-records"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @classdesc
 * Renders an entire records table. To fill the data you might need:
 *
 * - {@link useRecords} and
 * - {@link useSelectedRecords} hooks
 *
 * so make sure to see at the documentation pages for both of them
 *
 * @component
 * @class
 * @hideconstructor
 * @subcategory Application
 */
const RecordsTable = props => {
  const {
    resource,
    records,
    actionPerformed,
    sortBy,
    direction,
    isLoading,
    onSelect,
    selectedRecords,
    onSelectAll
  } = props;

  if (!records.length) {
    if (isLoading) {
      return /*#__PURE__*/_react.default.createElement(_designSystem.Loader, null);
    }

    return /*#__PURE__*/_react.default.createElement(_noRecords.default, {
      resource: resource
    });
  }

  const selectedAll = selectedRecords && !!records.find(record => selectedRecords.find(selected => selected.id === record.id));
  const recordsHaveBulkAction = !!records.find(record => record.bulkActions.length);
  const contentTag = (0, _utils.getResourceElementCss)(resource.id, 'table');
  const selectedTag = (0, _utils.getResourceElementCss)(resource.id, 'table-selected-records');
  const bodyTag = (0, _utils.getResourceElementCss)(resource.id, 'table-body');
  return /*#__PURE__*/_react.default.createElement(_designSystem.Table, {
    "data-css": contentTag
  }, /*#__PURE__*/_react.default.createElement(_selectedRecords.default, {
    resource: resource,
    selectedRecords: selectedRecords,
    "data-css": selectedTag
  }), /*#__PURE__*/_react.default.createElement(_recordsTableHeader.default, {
    properties: resource.listProperties,
    titleProperty: resource.titleProperty,
    direction: direction,
    sortBy: sortBy,
    onSelectAll: recordsHaveBulkAction ? onSelectAll : undefined,
    selectedAll: selectedAll
  }), /*#__PURE__*/_react.default.createElement(_designSystem.TableBody, {
    "data-css": bodyTag
  }, records.map(record => /*#__PURE__*/_react.default.createElement(_recordInList.default, {
    record: record,
    resource: resource,
    key: record.id,
    actionPerformed: actionPerformed,
    isLoading: isLoading,
    onSelect: onSelect,
    isSelected: selectedRecords && !!selectedRecords.find(selected => selected.id === record.id)
  }))));
};

const OverridableRecordsTable = (0, _allowOverride.default)(RecordsTable, 'RecordsTable');
exports.RecordsTable = exports.default = OverridableRecordsTable;