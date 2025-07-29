"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authServices = void 0;
const authModel_1 = __importDefault(require("./authModel"));
const AppError_1 = __importDefault(require("../../errorHelpers/AppError"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt_1 = require("../../utils/jwt");
const createUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = payload;
    const existUser = yield authModel_1.default.findOne({ email });
    if (existUser) {
        throw new AppError_1.default(400, "User already exist!");
    }
    ;
    const passwordHas = yield bcryptjs_1.default.hash(password, 10);
    const user = yield authModel_1.default.create({ name: name, email: email, password: passwordHas });
    return user;
});
const userLogin = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = data;
    const findUser = yield authModel_1.default.findOne({ email: email });
    if (!findUser) {
        throw new AppError_1.default(404, "Invalid creadiantial");
    }
    const compairePassword = yield bcryptjs_1.default.compare(password, findUser.password);
    if (!compairePassword) {
        throw new AppError_1.default(400, "Password not valid!");
    }
    ;
    const payload = {
        userId: findUser._id,
        email: findUser.email
    };
    const token = (0, jwt_1.generateJwt)(payload);
    return {
        user: findUser,
        token
    };
});
exports.authServices = {
    createUser,
    userLogin
};
