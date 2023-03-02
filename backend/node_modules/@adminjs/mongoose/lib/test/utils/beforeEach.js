"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const models_1 = require("./models");
const dropAllCollections = async () => {
    await mongoose_1.default.connect('mongodb://localhost/e2e_test', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    await Promise.all([
        models_1.Pesel.deleteMany({}),
        models_1.User.deleteMany({}),
        models_1.Article.deleteMany({}),
    ]);
};
beforeEach(dropAllCollections);
//# sourceMappingURL=beforeEach.js.map