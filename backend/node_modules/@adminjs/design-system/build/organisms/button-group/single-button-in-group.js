"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.SingleButtonInGroup = void 0;
const react_1 = __importStar(require("react"));
const box_1 = __importDefault(require("../../atoms/box/box"));
const icon_1 = __importDefault(require("../../atoms/icon"));
const button_group_styled_1 = require("./button-group.styled");
exports.SingleButtonInGroup = (props) => {
    const { icon, label, buttons, source, onClick } = props, buttonProps = __rest(props, ["icon", "label", "buttons", "source", "onClick"]);
    const [loading, setLoading] = react_1.useState(false);
    const onClickHandler = onClick
        ? async (event) => {
            setLoading(true);
            await onClick(event, source);
            setLoading(false);
        }
        : undefined;
    const iconName = react_1.useMemo(() => {
        if (loading)
            return 'Fade';
        return icon !== null && icon !== void 0 ? icon : '';
    }, [loading]);
    return (react_1.default.createElement(button_group_styled_1.StyledSingleButton, Object.assign({ as: "a", hasLabel: !!label, onClick: onClickHandler }, buttonProps),
        !loading && !icon ? '' : react_1.default.createElement(icon_1.default, { key: iconName.toString(), icon: iconName, spin: loading }),
        label,
        buttons && buttons.length && label ? (react_1.default.createElement(box_1.default, { as: "span", mr: "-8px", ml: "md" },
            react_1.default.createElement(icon_1.default, { icon: "CaretDown" }))) : ''));
};
exports.default = exports.SingleButtonInGroup;
