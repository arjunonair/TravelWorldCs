"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const getBulkActionsFromRecords = records => {
  const actions = Object.values(records.reduce((memo, record) => ({ ...memo,
    ...record.bulkActions.reduce((actionsMemo, action) => ({ ...actionsMemo,
      [action.name]: action
    }), {})
  }), {}));
  return actions;
};

var _default = getBulkActionsFromRecords;
exports.default = _default;