"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StyledBackButton = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

var _designSystem = require("@adminjs/design-system");

var _reactRedux = require("react-redux");

var _allowOverride = _interopRequireDefault(require("../../../hoc/allow-override"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StyledLink = (0, _styledComponents.default)(({
  rounded,
  ...rest
}) => /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, rest)).withConfig({
  displayName: "styled-back-button__StyledLink",
  componentId: "sc-pn0p1u-0"
})(["", ""], _designSystem.ButtonCSS);

const StyledBackButton = props => {
  const {
    showInDrawer
  } = props;
  const {
    previousRoute
  } = (0, _reactRedux.useSelector)(state => state.drawer);
  const {
    from = {}
  } = (0, _reactRedux.useSelector)(state => state.router);
  const cssCloseIcon = showInDrawer ? 'ChevronRight' : 'ChevronLeft';
  const backLink = (0, _react.useMemo)(() => {
    if (!showInDrawer) {
      return from === null || from === void 0 ? void 0 : from.pathname;
    }

    if (previousRoute !== null && previousRoute !== void 0 && previousRoute.pathname) {
      return previousRoute === null || previousRoute === void 0 ? void 0 : previousRoute.pathname;
    }

    return from === null || from === void 0 ? void 0 : from.pathname;
  }, [previousRoute, from]);
  return /*#__PURE__*/_react.default.createElement(StyledLink, {
    size: "icon",
    to: backLink,
    rounded: true,
    mr: "lg",
    type: "button"
  }, /*#__PURE__*/_react.default.createElement(_designSystem.Icon, {
    icon: cssCloseIcon
  }));
};

const OverridableStyledBackButton = (0, _allowOverride.default)(StyledBackButton, 'StyledBackButton');
exports.StyledBackButton = exports.default = OverridableStyledBackButton;