"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actionsToButtonGroup = void 0;

var _interfaces = require("../../../interfaces");

const actionsToButtonGroup = options => {
  const {
    actions,
    params,
    handleClick
  } = options;
  const buttons = actions.map(action => {
    const href = (0, _interfaces.actionHref)(action, params);
    return {
      icon: action.icon,
      label: action.label,
      variant: action.variant,
      source: action,
      href: href || undefined,
      // when href is not defined - handle click should also be not defined
      // This prevents from "cursor: pointer;"
      onClick: href ? handleClick : undefined,
      'data-testid': (0, _interfaces.buildActionTestId)(action),
      buttons: [],
      'data-css': `${action.resourceId}-${action.name}-button`
    };
  }); // nesting buttons

  const buttonsMap = buttons.reduce((memo, button) => {
    const action = button.source;

    if (action.parent) {
      const parent = memo[action.parent] || buttons.find(btn => btn.source.name === action.parent) || {
        label: action.parent
      };
      parent.buttons = parent.buttons || [];
      parent.buttons.push(button);
      return { ...memo,
        [action.parent]: parent
      };
    }

    return { ...memo,
      [button.source.name]: button
    };
  }, {});
  return Object.values(buttonsMap);
};

exports.actionsToButtonGroup = actionsToButtonGroup;