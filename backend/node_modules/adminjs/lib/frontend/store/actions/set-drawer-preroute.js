"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDrawerPreRoute = exports.DRAWER_PREROUTE_SET = void 0;
const DRAWER_PREROUTE_SET = 'DRAWER_PREROUTE_SET';
exports.DRAWER_PREROUTE_SET = DRAWER_PREROUTE_SET;

const setDrawerPreRoute = data => ({
  type: DRAWER_PREROUTE_SET,
  data
});

exports.setDrawerPreRoute = setDrawerPreRoute;