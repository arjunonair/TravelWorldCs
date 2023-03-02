"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComponentLoader = void 0;

var path = _interopRequireWildcard(require("path"));

var fs = _interopRequireWildcard(require("fs"));

var _ = require(".");

var _fileResolver = require("../../utils/file-resolver");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class ComponentLoader {
  components = {};

  add(name, filePath, caller = 'add') {
    const resolvedFilePath = ComponentLoader.resolveFilePath(filePath, caller);

    if (this.components[name] && this.components[name].filePath !== resolvedFilePath || ComponentLoader.defaultComponents.includes(name)) {
      throw new Error(`Component '${name}' is already defined, use .override() instead`);
    }

    this.components[name] = {
      overrides: false,
      filePath: resolvedFilePath
    };
    return name;
  }

  override(name, filePath, caller = 'override') {
    const resolvedFilePath = ComponentLoader.resolveFilePath(filePath, caller);

    if (!this.components[name] && !ComponentLoader.defaultComponents.includes(name)) {
      throw new Error(`Component '${name}' is not defined, use .add() instead`);
    }

    this.components[name] = {
      overrides: true,
      filePath: resolvedFilePath
    };
    return name;
  }

  __unsafe_addWithoutChecks(name, filePath, caller = '__unsafe_addWithoutChecks') {
    const resolvedFilePath = ComponentLoader.resolveFilePath(filePath, caller);
    this.components[name] = {
      overrides: false,
      filePath: resolvedFilePath
    };
    return name;
  }

  clear() {
    this.components = {};
  }

  getComponents() {
    return Object.entries(this.components).reduce((result, [key, component]) => {
      result[key] = component.filePath;
      return result;
    }, {});
  }

  __unsafe_merge(componentLoader) {
    this.components = { ...componentLoader.components,
      ...this.components
    };
  }

  static resolveFilePath(filePath, caller) {
    const extensions = ['.jsx', '.js', '.ts', '.tsx'];
    const src = path.isAbsolute(filePath) ? filePath : (0, _fileResolver.relativeFilePathResolver)(filePath, new RegExp(`.*.{1}${caller}`));
    const {
      ext: originalFileExtension
    } = path.parse(src);

    for (const extension of extensions) {
      const forcedExt = extensions.includes(originalFileExtension) ? '' : extension;
      const {
        root,
        dir,
        name,
        ext
      } = path.parse(src + forcedExt);
      const fileName = path.format({
        root,
        dir,
        name,
        ext
      });

      if (fs.existsSync(fileName)) {
        return path.format({
          root,
          dir,
          name
        });
      }
    }

    throw new _.ConfigurationError(`Trying to bundle file '${src}' but it doesn't exist`, 'AdminJS.html');
  }

  static defaultComponents = ['LoggedIn', 'NoRecords', 'SidebarResourceSection', 'SidebarFooter', 'SidebarBranding', 'Sidebar', 'TopBar', 'Breadcrumbs', 'FilterDrawer', 'NoticeBox', 'Version', 'SidebarPages', 'PropertyHeader', 'RecordInList', 'RecordsTableHeader', 'RecordsTable', 'SelectedRecords', 'StyledBackButton', 'ActionHeader', 'ActionButton', 'BulkActionRoute', 'DashboardRoute', 'RecordActionRoute', 'ResourceActionRoute', 'ResourceRoute', 'PageRoute', 'RouteWrapper', 'Application', 'DefaultEditAction', 'DefaultBulkDeleteAction', 'DefaultListAction', 'DefaultNewAction', 'DefaultShowAction', 'DefaultArrayShowProperty', 'DefaultArrayListProperty', 'DefaultArrayEditProperty', 'DefaultBooleanEditProperty', 'DefaultBooleanFilterProperty', 'DefaultBooleanListProperty', 'DefaultBooleanShowProperty', 'BooleanPropertyValue', 'DefaultCurrencyEditProperty', 'DefaultCurrencyShowProperty', 'DefaultCurrencyListProperty', 'DefaultCurrencyFilterProperty', 'CurrencyPropertyInputWrapper', 'DefaultDatetimeEditProperty', 'DefaultDatetimeShowProperty', 'DefaultDatetimeListProperty', 'DefaultDatetimeFilterProperty', 'DefaultPropertyValue', 'DefaultShowProperty', 'DefaultListProperty', 'DefaultEditProperty', 'DefaultFilterProperty', 'DefaultMixedShowProperty', 'DefaultMixedListProperty', 'DefaultMixedEditProperty', 'DefaultPasswordEditProperty', 'DefaultPhoneEditProperty', 'DefaultPhoneFilterProperty', 'DefaultPhoneListProperty', 'DefaultPhoneShowProperty', 'DefaultReferenceEditProperty', 'DefaultReferenceShowProperty', 'DefaultReferenceListProperty', 'DefaultReferenceFilterProperty', 'DefaultReferenceValue', 'DefaultRichtextEditProperty', 'DefaultRichtextListProperty', 'DefaultRichtextShowProperty', 'DefaultTextareaEditProperty', 'DefaultTextareaShowProperty', 'PropertyDescription', 'PropertyLabel'];
}

exports.ComponentLoader = ComponentLoader;