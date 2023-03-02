"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pesel = exports.Article = exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const factory_girl_1 = require("factory-girl");
const globalAny = global;
// @ts-ignore
const NestedObject = new mongoose_1.default.Schema({
    someProperty: Number,
});
// @ts-ignore
const SubType = new mongoose_1.default.Schema({
    name: String,
    surname: String,
    age: Number,
    nestedArray: [NestedObject],
    nestedObject: NestedObject,
});
globalAny.User = mongoose_1.default.model('User', new mongoose_1.default.Schema({
    email: { type: String, required: true },
    passwordHash: { type: String, required: true },
    genre: { type: String, enum: ['male', 'female'] },
    arrayed: [String],
    parent: SubType,
    family: [SubType],
}));
globalAny.Pesel = mongoose_1.default.model('Pesel', new mongoose_1.default.Schema({
    pesel: {
        type: String, unique: true, required: true, sparse: true,
    },
}));
globalAny.Article = mongoose_1.default.model('Article', new mongoose_1.default.Schema({
    content: String,
    owners: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'User',
        }],
    createdBy: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
    },
}));
exports.User = globalAny.User, exports.Article = globalAny.Article, exports.Pesel = globalAny.Pesel;
factory_girl_1.factory.define('user', exports.User, {
    email: factory_girl_1.factory.sequence('User.email', n => `john@doe${n}.com`),
    passwordHash: 'somehashedpassword',
});
//# sourceMappingURL=models.js.map