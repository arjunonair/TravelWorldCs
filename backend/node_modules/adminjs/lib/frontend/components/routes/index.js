"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "BulkActionRoute", {
  enumerable: true,
  get: function () {
    return _bulkAction.default;
  }
});
Object.defineProperty(exports, "DashboardRoute", {
  enumerable: true,
  get: function () {
    return _dashboard.default;
  }
});
Object.defineProperty(exports, "PageRoute", {
  enumerable: true,
  get: function () {
    return _page.default;
  }
});
Object.defineProperty(exports, "RecordActionRoute", {
  enumerable: true,
  get: function () {
    return _recordAction.default;
  }
});
Object.defineProperty(exports, "ResourceActionRoute", {
  enumerable: true,
  get: function () {
    return _resourceAction.default;
  }
});
Object.defineProperty(exports, "ResourceRoute", {
  enumerable: true,
  get: function () {
    return _resource.default;
  }
});

var _dashboard = _interopRequireDefault(require("./dashboard"));

var _recordAction = _interopRequireDefault(require("./record-action"));

var _resourceAction = _interopRequireDefault(require("./resource-action"));

var _bulkAction = _interopRequireDefault(require("./bulk-action"));

var _page = _interopRequireDefault(require("./page"));

var _resource = _interopRequireDefault(require("./resource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }