"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const teardownE2ETests = async () => {
    await Promise.all(mongoose_1.default.connections.map(connection => connection.close(true)));
    await mongoose_1.default.connection.close();
    await mongoose_1.default.disconnect();
    process.exit();
};
exports.default = teardownE2ETests;
//# sourceMappingURL=teardown.js.map