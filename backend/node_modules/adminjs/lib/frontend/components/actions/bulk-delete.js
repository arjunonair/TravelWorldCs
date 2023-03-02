"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BulkDelete = void 0;

var _designSystem = require("@adminjs/design-system");

var _react = _interopRequireWildcard(require("react"));

var _reactRouter = require("react-router");

var _allowOverride = _interopRequireDefault(require("../../hoc/allow-override"));

var _withNotice = _interopRequireDefault(require("../../hoc/with-notice"));

var _hooks = require("../../hooks");

var _utils = require("../../utils");

var _apiClient = _interopRequireDefault(require("../../utils/api-client"));

var _actionHeader = _interopRequireDefault(require("../app/action-header/action-header"));

var _propertyType = _interopRequireDefault(require("../property-type"));

var _appendForceRefresh = require("./utils/append-force-refresh");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * @name BulkDeleteAction
 * @category Actions
 * @description Deletes selected records.
 * @component
 * @private
 */
const BulkDelete = props => {
  const {
    resource,
    records,
    action,
    addNotice
  } = props;
  const navigate = (0, _reactRouter.useNavigate)();
  const [loading, setLoading] = (0, _react.useState)(false);
  const {
    translateMessage,
    translateButton
  } = (0, _hooks.useTranslation)();

  if (!records) {
    return /*#__PURE__*/_react.default.createElement(_designSystem.Text, null, translateMessage('pickSomeFirstToRemove', resource.id));
  }

  const handleClick = () => {
    const api = new _apiClient.default();
    setLoading(true);
    const recordIds = records.map(r => r.id);
    api.bulkAction({
      resourceId: resource.id,
      actionName: action.name,
      recordIds,
      method: 'post'
    }).then(response => {
      setLoading(false);

      if (response.data.notice) {
        addNotice(response.data.notice);
      }

      if (response.data.redirectUrl) {
        const search = new URLSearchParams(window.location.search); // bulk function have recordIds in the URL so it has to be stripped before redirect

        search.delete('recordIds');
        navigate((0, _appendForceRefresh.appendForceRefresh)(response.data.redirectUrl, search.toString()));
      }
    }).catch(error => {
      setLoading(false);
      addNotice({
        message: translateMessage('bulkDeleteError', resource.id),
        type: 'error'
      });
      throw error;
    });
  };

  const contentTag = (0, _utils.getActionElementCss)(resource.id, action.name, 'drawer-content');
  const tableTag = (0, _utils.getActionElementCss)(resource.id, action.name, 'table');
  const footerTag = (0, _utils.getActionElementCss)(resource.id, action.name, 'drawer-footer');
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_designSystem.DrawerContent, {
    "data-css": contentTag
  }, action !== null && action !== void 0 && action.showInDrawer ? /*#__PURE__*/_react.default.createElement(_actionHeader.default, _extends({
    omitActions: true
  }, props)) : null, /*#__PURE__*/_react.default.createElement(_designSystem.MessageBox, {
    mb: "xxl",
    variant: "danger",
    message: translateMessage(records.length > 1 ? 'theseRecordsWillBeRemoved_plural' : 'theseRecordsWillBeRemoved', resource.id, {
      count: records.length
    })
  }), /*#__PURE__*/_react.default.createElement(_designSystem.Table, {
    "data-css": tableTag
  }, /*#__PURE__*/_react.default.createElement(_designSystem.TableBody, null, records.map(record => /*#__PURE__*/_react.default.createElement(_designSystem.TableRow, {
    key: record.id
  }, /*#__PURE__*/_react.default.createElement(_designSystem.TableCell, null, /*#__PURE__*/_react.default.createElement(_propertyType.default, {
    where: "list",
    property: resource.titleProperty,
    resource: resource,
    record: record
  }))))))), /*#__PURE__*/_react.default.createElement(_designSystem.DrawerFooter, {
    "data-css": footerTag
  }, /*#__PURE__*/_react.default.createElement(_designSystem.Button, {
    variant: "primary",
    size: "lg",
    onClick: handleClick,
    disabled: loading
  }, loading ? /*#__PURE__*/_react.default.createElement(_designSystem.Icon, {
    icon: "Fade",
    spin: true
  }) : null, translateButton(records.length > 1 ? 'confirmRemovalMany_plural' : 'confirmRemovalMany', resource.id, {
    count: records.length
  }))));
};

const FormattedBulkDelete = (0, _withNotice.default)(BulkDelete);
const OverridableFormattedBulkDelete = (0, _allowOverride.default)(FormattedBulkDelete, 'DefaultBulkDeleteAction');
exports.BulkDelete = exports.default = OverridableFormattedBulkDelete;