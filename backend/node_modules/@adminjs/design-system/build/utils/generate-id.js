"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateId = (key) => {
    const accessKey = `UNIQUE_KEY_${key}`;
    window.AdminJS = window.AdminJS || {};
    window.AdminJS[accessKey] = (Number.parseInt(window.AdminJS[accessKey], 10) || 0) + 1;
    return [accessKey, window.AdminJS[accessKey]].join('_');
};
exports.default = generateId;
