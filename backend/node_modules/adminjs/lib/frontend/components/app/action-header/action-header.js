"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ActionHeader = void 0;

var _designSystem = require("@adminjs/design-system");

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

var _allowOverride = _interopRequireDefault(require("../../../hoc/allow-override"));

var _hooks = require("../../../hooks");

var _action = require("../../../interfaces/action");

var _utils = require("../../../utils");

var _breadcrumbs = _interopRequireDefault(require("../breadcrumbs"));

var _actionsToButtonGroup = require("./actions-to-button-group");

var _styledBackButton = require("./styled-back-button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable jsx-a11y/anchor-is-valid */

/**
 * Header of an action. It renders Action name with buttons for all the actions.
 *
 * ### Usage
 *
 * ```
 * import { ActionHeader } from 'adminjs'
 * ```
 *
 * @component
 * @subcategory Application
 */
const ActionHeader = props => {
  const {
    resource,
    toggleFilter,
    actionPerformed,
    record,
    action,
    tag,
    omitActions
  } = props;
  const {
    translateButton
  } = (0, _hooks.useTranslation)();
  const navigate = (0, _reactRouter.useNavigate)();
  const actionResponseHandler = (0, _hooks.useActionResponseHandler)(actionPerformed);

  if (action.hideActionHeader) {
    return null;
  }

  const resourceId = resource.id;
  const params = {
    resourceId,
    recordId: record === null || record === void 0 ? void 0 : record.id
  };

  const handleActionClick = (event, sourceAction) => (0, _action.buildActionClickHandler)({
    action: sourceAction,
    params,
    actionResponseHandler,
    navigate
  })(event);

  const actionButtons = (0, _actionsToButtonGroup.actionsToButtonGroup)({
    actions: record ? record.recordActions.filter(ra => !action || action.name !== ra.name) // only new action should be seen in regular "Big" actions place
    : resource.resourceActions.filter(ra => ra.name === 'new' && (!action || action.name !== ra.name)),
    params,
    handleClick: handleActionClick
  });

  if (toggleFilter) {
    actionButtons.push({
      label: translateButton('filter', resource.id),
      onClick: toggleFilter,
      icon: 'SettingsAdjust',
      'data-css': (0, _utils.getResourceElementCss)(resource.id, 'filter-button')
    });
  } // list and new actions are special and are are always


  const customResourceButtons = (0, _actionsToButtonGroup.actionsToButtonGroup)({
    actions: action.showResourceActions ? resource.resourceActions.filter(ra => !['list', 'new'].includes(ra.name)) : [],
    params: {
      resourceId
    },
    handleClick: handleActionClick
  });
  const title = action ? action.label : resource.name; // styled which differs if action header is in the drawer or not

  const cssIsRootFlex = !action.showInDrawer;
  const cssHeaderMT = action.showInDrawer ? '' : 'lg';
  const cssActionsMB = action.showInDrawer ? 'xl' : 'default';
  const CssHComponent = action.showInDrawer ? _designSystem.H3 : _designSystem.H2;
  const contentTag = (0, _utils.getActionElementCss)(resourceId, action.name, 'action-header');
  return /*#__PURE__*/_react.default.createElement(_designSystem.Box, {
    className: (0, _designSystem.cssClass)('ActionHeader'),
    "data-css": contentTag
  }, action.showInDrawer ? '' : /*#__PURE__*/_react.default.createElement(_designSystem.Box, {
    flex: true,
    flexDirection: "row",
    px: ['default', 0]
  }, /*#__PURE__*/_react.default.createElement(_breadcrumbs.default, {
    resource: resource,
    actionName: action.name,
    record: record
  }), /*#__PURE__*/_react.default.createElement(_designSystem.Box, {
    flexShrink: 0
  }, /*#__PURE__*/_react.default.createElement(_designSystem.ButtonGroup, {
    size: "sm",
    rounded: true,
    buttons: customResourceButtons
  }))), /*#__PURE__*/_react.default.createElement(_designSystem.Box, {
    display: ['block', cssIsRootFlex ? 'flex' : 'block']
  }, /*#__PURE__*/_react.default.createElement(_designSystem.Box, {
    mt: cssHeaderMT,
    flexGrow: 1,
    px: ['default', 0]
  }, /*#__PURE__*/_react.default.createElement(CssHComponent, {
    mb: "lg"
  }, action.showInDrawer ? /*#__PURE__*/_react.default.createElement(_styledBackButton.StyledBackButton, {
    showInDrawer: action.showInDrawer
  }) : '', title, tag ? /*#__PURE__*/_react.default.createElement(_designSystem.Badge, {
    variant: "primary",
    ml: "default"
  }, tag) : '')), omitActions ? '' : /*#__PURE__*/_react.default.createElement(_designSystem.Box, {
    mt: "xl",
    mb: cssActionsMB,
    flexShrink: 0
  }, /*#__PURE__*/_react.default.createElement(_designSystem.ButtonGroup, {
    buttons: actionButtons
  }))));
};

const OverridableActionHeader = (0, _allowOverride.default)(ActionHeader, 'ActionHeader');
exports.ActionHeader = exports.default = OverridableActionHeader;