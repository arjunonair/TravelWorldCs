"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validationError = _interopRequireDefault(require("../../utils/errors/validation-error"));

var _forbiddenError = _interopRequireDefault(require("../../utils/errors/forbidden-error"));

var _notFoundError = _interopRequireDefault(require("../../utils/errors/not-found-error"));

var _appError = _interopRequireDefault(require("../../utils/errors/app-error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 * @classdesc
 * Function which catches all the errors thrown by the action hooks or handler
 */
const actionErrorHandler = (error, context) => {
  if (error instanceof _validationError.default || error instanceof _forbiddenError.default || error instanceof _notFoundError.default || error instanceof _appError.default) {
    var _record$toJSON;

    const {
      record,
      resource,
      currentAdmin,
      action
    } = context;
    const baseError = error.baseError ?? null;
    let baseMessage = '';
    let errors = {};
    let meta;

    if (error instanceof _validationError.default) {
      var _error$baseError;

      baseMessage = ((_error$baseError = error.baseError) === null || _error$baseError === void 0 ? void 0 : _error$baseError.message) || context.translateMessage('thereWereValidationErrors', resource.id());
      errors = error.propertyErrors;
    } else {
      // ForbiddenError, NotFoundError, AppError
      baseMessage = error.baseMessage || context.translateMessage('anyForbiddenError', resource.id());
    } // Add required meta data for the list action


    if (action.name === 'list') {
      meta = {
        total: 0,
        perPage: 0,
        page: 0,
        direction: null,
        sortBy: null
      };
    }

    const recordJson = record === null || record === void 0 ? void 0 : (_record$toJSON = record.toJSON) === null || _record$toJSON === void 0 ? void 0 : _record$toJSON.call(record, currentAdmin);
    return {
      record: { ...recordJson,
        params: (recordJson === null || recordJson === void 0 ? void 0 : recordJson.params) ?? {},
        populated: (recordJson === null || recordJson === void 0 ? void 0 : recordJson.populated) ?? {},
        baseError,
        errors
      },
      records: [],
      notice: {
        message: baseMessage,
        type: 'error'
      },
      meta
    };
  }

  throw error;
};

var _default = actionErrorHandler;
exports.default = _default;