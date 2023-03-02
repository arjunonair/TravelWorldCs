"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _setDrawerPreroute = require("./actions/set-drawer-preroute");

var _actions = require("./actions");

var _constants = require("../../constants");

/* eslint-disable @typescript-eslint/explicit-function-return-type */
// Note: We are using legacy "createStore"
// because AdminJS will switch to Eventrix from v7 onwards anyway
const resourcesReducer = (state = [], action) => {
  switch (action.type) {
    case _actions.RESOURCES_INITIALIZE:
      return action.data;

    default:
      return state;
  }
};

const pagesReducer = (state = [], action) => {
  switch (action.type) {
    case _actions.PAGES_INITIALIZE:
      return action.data;

    default:
      return state;
  }
};

const localesReducer = (state = {
  language: 'en',
  translations: {}
}, action) => {
  switch (action.type) {
    case _actions.LOCALE_INITIALIZE:
      return action.data;

    default:
      return state;
  }
};

const brandingReducer = (state = {}, action) => {
  switch (action.type) {
    case _actions.BRANDING_INITIALIZE:
      return action.data;

    default:
      return state;
  }
};

const assetsReducer = (state = {}, action) => {
  switch (action.type) {
    case _actions.ASSETS_INITIALIZE:
      return action.data;

    default:
      return state;
  }
};

const pathsReducer = (state = _constants.DEFAULT_PATHS, action) => {
  switch (action.type) {
    case _actions.PATHS_INITIALIZE:
      return action.data;

    default:
      return state;
  }
};

const dashboardReducer = (state = {}, action) => {
  switch (action.type) {
    case _actions.DASHBOARD_INITIALIZE:
      return action.data;

    default:
      return state;
  }
};

const sessionReducer = (state = null, action) => {
  switch (action.type) {
    case _actions.SESSION_INITIALIZE:
      return action.data;

    default:
      return state;
  }
};

const versionsReducer = (state = {}, action) => {
  switch (action.type) {
    case _actions.VERSIONS_INITIALIZE:
      return {
        admin: action.data.admin,
        app: action.data.app
      };

    default:
      return state;
  }
};

const routerReducer = (state = {
  from: {},
  to: {}
}, action) => {
  switch (action.type) {
    case _actions.INITIAL_ROUTE:
      return { ...state,
        from: { ...action.data
        }
      };

    case _actions.ROUTE_CHANGED:
      return {
        from: { ...state.to
        },
        to: { ...action.data
        }
      };

    default:
      return state;
  }
};

const drawerReducer = (state = {
  previousRoute: null
}, action) => {
  switch (action.type) {
    case _setDrawerPreroute.DRAWER_PREROUTE_SET:
      {
        return { ...state,
          ...action.data
        };
      }

    default:
      {
        return state;
      }
  }
};

const noticesReducer = (state = [], action) => {
  switch (action.type) {
    case _actions.ADD_NOTICE:
      {
        const notices = [action.data];
        return notices;
      }

    case _actions.DROP_NOTICE:
      {
        return state.filter(notice => notice.id !== action.data.noticeId);
      }

    case _actions.SET_NOTICE_PROGRESS:
      {
        return state.map(notice => ({ ...notice,
          progress: notice.id === action.data.noticeId ? action.data.progress : notice.progress
        }));
      }

    default:
      return state;
  }
};

const reducer = (0, _redux.combineReducers)({
  resources: resourcesReducer,
  branding: brandingReducer,
  assets: assetsReducer,
  paths: pathsReducer,
  session: sessionReducer,
  dashboard: dashboardReducer,
  notices: noticesReducer,
  versions: versionsReducer,
  pages: pagesReducer,
  locale: localesReducer,
  router: routerReducer,
  drawer: drawerReducer
});

var _default = (initialState = {}) => (0, _redux.legacy_createStore)(reducer, initialState);

exports.default = _default;