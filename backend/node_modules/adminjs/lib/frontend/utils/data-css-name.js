"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getResourceElementCss = exports.getActionElementCss = void 0;

const getResourceElementCss = (resourceId, suffix) => `${resourceId}-${suffix}`;

exports.getResourceElementCss = getResourceElementCss;

const getActionElementCss = (resourceId, actionName, suffix) => `${resourceId}-${actionName}-${suffix}`;

exports.getActionElementCss = getActionElementCss;