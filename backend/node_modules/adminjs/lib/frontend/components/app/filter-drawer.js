"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FilterDrawer = void 0;

var _designSystem = require("@adminjs/design-system");

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _allowOverride = _interopRequireDefault(require("../../hoc/allow-override"));

var _hooks = require("../../hooks");

var _utils = require("../../utils");

var _propertyType = _interopRequireDefault(require("../property-type"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const parseQuery = location => {
  const filter = {};
  const query = new URLSearchParams(location.search);

  for (const entry of query.entries()) {
    const [key, value] = entry;

    if (key.match('filters.')) {
      filter[key.replace('filters.', '')] = value;
    }
  }

  return filter;
};

const FilterDrawer = props => {
  const {
    resource,
    isVisible,
    toggleFilter
  } = props;
  const properties = resource.filterProperties;
  const location = (0, _reactRouterDom.useLocation)();
  const [filter, setFilter] = (0, _react.useState)(parseQuery(location));
  const params = (0, _reactRouterDom.useParams)();
  const navigate = (0, _reactRouterDom.useNavigate)();
  const {
    translateLabel,
    translateButton
  } = (0, _hooks.useTranslation)();
  const initialLoad = (0, _react.useRef)(true);
  (0, _react.useEffect)(() => {
    if (initialLoad.current) {
      initialLoad.current = false;
    } else {
      setFilter({});
    }
  }, [params.resourceId]);

  const handleSubmit = event => {
    event.preventDefault();
    const search = new URLSearchParams(window.location.search);
    Object.keys(filter).forEach(key => {
      if (filter[key] !== '') {
        search.set(`filters.${key}`, filter[key]);
      } else {
        search.delete(`filters.${key}`);
      }
    });
    toggleFilter();
    search.set('page', '1');
    navigate(`${location.pathname}?${search.toString()}`);
    return false;
  };

  const resetFilter = event => {
    event.preventDefault();
    const filteredSearch = new URLSearchParams();
    const search = new URLSearchParams(window.location.search);

    for (const key of search.keys()) {
      if (!key.match('filters.')) {
        filteredSearch.set(key, search.get(key));
      }
    }

    const query = filteredSearch.toString() === '' ? `?${filteredSearch.toString()}` : '';
    toggleFilter();
    navigate(location.pathname + query);
    setFilter({});
  };

  const handleChange = (propertyName, value) => {
    if (propertyName.params) {
      throw new Error('you can not pass RecordJSON to filters');
    }

    setFilter({ ...filter,
      [propertyName]: value
    });
  };

  const contentTag = (0, _utils.getResourceElementCss)(params.resourceId, 'filter-drawer');
  const cssContent = (0, _utils.getResourceElementCss)(params.resourceId, 'filter-drawer-content');
  const cssFooter = (0, _utils.getResourceElementCss)(params.resourceId, 'filter-drawer-footer');
  const cssButtonApply = (0, _utils.getResourceElementCss)(params.resourceId, 'filter-drawer-button-apply');
  const cssButtonReset = (0, _utils.getResourceElementCss)(params.resourceId, 'filter-drawer-button-reset');
  return /*#__PURE__*/_react.default.createElement(_designSystem.Drawer, {
    variant: "filter",
    isHidden: !isVisible,
    as: "form",
    onSubmit: handleSubmit,
    "data-css": contentTag
  }, /*#__PURE__*/_react.default.createElement(_designSystem.DrawerContent, {
    "data-css": cssContent
  }, /*#__PURE__*/_react.default.createElement(_designSystem.H3, null, /*#__PURE__*/_react.default.createElement(_designSystem.Button, {
    type: "button",
    size: "icon",
    rounded: true,
    mr: "lg",
    onClick: () => toggleFilter()
  }, /*#__PURE__*/_react.default.createElement(_designSystem.Icon, {
    icon: "ChevronRight",
    color: "white"
  })), translateLabel('filters', resource.id)), /*#__PURE__*/_react.default.createElement(_designSystem.Box, {
    my: "x3"
  }, properties.map(property => /*#__PURE__*/_react.default.createElement(_propertyType.default, {
    key: property.propertyPath,
    where: "filter",
    onChange: handleChange,
    property: property,
    filter: filter,
    resource: resource
  })))), /*#__PURE__*/_react.default.createElement(_designSystem.DrawerFooter, {
    "data-css": cssFooter
  }, /*#__PURE__*/_react.default.createElement(_designSystem.Button, {
    variant: "primary",
    size: "lg",
    "data-css": cssButtonApply
  }, translateButton('applyChanges', resource.id)), /*#__PURE__*/_react.default.createElement(_designSystem.Button, {
    variant: "text",
    size: "lg",
    onClick: resetFilter,
    type: "button",
    color: "white",
    "data-css": cssButtonReset
  }, translateButton('resetFilter', resource.id))));
};

const OverridableFilterDrawer = (0, _allowOverride.default)(FilterDrawer, 'FilterDrawer');
exports.FilterDrawer = exports.default = OverridableFilterDrawer;