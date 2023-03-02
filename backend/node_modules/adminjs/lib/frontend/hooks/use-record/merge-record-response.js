"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Handlers of all [Actions]{@link Action} of type `record` returns record.
 * Depending on a place and response we have to merge what was returned
 * to the actual state. It is done in following places:
 * - {@link useRecord} hook
 * - {@link RecordInList} component
 * - {@link RecordAction} component
 *
 * @private
 */
const mergeRecordResponse = (record, response) => ({ // we start from the response because it can have different recordActions or bulkActions
  ...(response.record || record),
  // records has to be reset every time because so that user wont
  // see old errors which are not relevant anymore
  errors: response.record.errors,
  populated: { ...record.populated,
    ...response.record.populated
  },
  params: { ...record.params,
    ...response.record.params
  }
});

var _default = mergeRecordResponse;
exports.default = _default;