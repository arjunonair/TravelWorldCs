"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actionHref = void 0;

var _viewHelpers = require("../../../backend/utils/view-helpers");

const h = new _viewHelpers.ViewHelpers();

const actionHref = (action, params) => {
  const actionName = action.name;

  if (!action.component && !action.hasHandler) {
    return null;
  }

  const hrefMap = {
    record: () => h.recordActionUrl({ ...params,
      actionName
    }),
    resource: () => h.resourceActionUrl({
      resourceId: params.resourceId,
      actionName
    }),
    bulk: () => h.bulkActionUrl({ ...params,
      actionName
    })
  };

  if (hrefMap[action.actionType]) {
    return hrefMap[action.actionType]();
  }

  throw new Error('"actionType" should be either record, resource or bulk');
};

exports.actionHref = actionHref;