"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decorateActions = decorateActions;

var _mergeWith = _interopRequireDefault(require("lodash/mergeWith"));

var _actions = require("../../../actions");

var _action = require("../../action");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mergeCustomizer(destValue, sourceValue) {
  if (Array.isArray(destValue)) {
    destValue.concat(sourceValue);
  }
}
/**
 * Used to create an {@link ActionDecorator} based on both
 * {@link AdminJS.ACTIONS default actions} and actions specified by the user
 * via {@link AdminJSOptions}
 *
 * @returns {Record<string, ActionDecorator>}
 * @private
 */


function decorateActions(resource, admin, decorator) {
  const {
    options
  } = decorator; // in the end we merge actions defined by the user with the default actions.
  // since _.merge is a deep merge it also overrides defaults with the parameters
  // specified by the user.

  const actions = (0, _mergeWith.default)({}, _actions.ACTIONS, options.actions || {}, mergeCustomizer);
  const returnActions = {}; // setting default values for actions

  Object.keys(actions).forEach(key => {
    const action = {
      name: actions[key].name || key,
      label: actions[key].label || key,
      actionType: actions[key].actionType || ['resource'],
      ...actions[key]
    };
    returnActions[key] = new _action.ActionDecorator({
      action,
      admin,
      resource
    });
  });
  return returnActions;
}