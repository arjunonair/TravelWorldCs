"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const parseISO_1 = __importDefault(require("date-fns/parseISO"));
const utils_1 = require("../../utils");
const useDatePicker = ({ value, propertyType, disabled, onChange }) => {
    const [isCalendarVisible, setCalendarVisible] = react_1.useState(false);
    let date;
    let dateString;
    if (value && value.constructor.name !== 'Date') {
        const dateStringValue = value;
        let dateNum = parseISO_1.default(dateStringValue);
        if (dateNum.toString() === 'Invalid Date')
            dateNum = undefined;
        if (dateNum) {
            date = new Date(dateNum);
            dateString = utils_1.formatDateProperty(date, propertyType);
        }
    }
    else if (value && value.constructor.name === 'Date') {
        dateString = utils_1.formatDateProperty(value, propertyType);
    }
    const onDateChange = (newDate) => {
        if (!disabled) {
            onChange(newDate);
        }
    };
    return { dateString, date, isCalendarVisible, setCalendarVisible, onDateChange };
};
exports.default = useDatePicker;
