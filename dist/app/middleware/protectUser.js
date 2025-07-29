"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.protect = void 0;
const AppError_1 = __importDefault(require("../errorHelpers/AppError"));
const jwt_1 = require("../utils/jwt");
const protect = (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            throw new AppError_1.default(401, "Unauthoraized user");
        }
        ;
        const decodedUser = (0, jwt_1.verifyToken)(token);
        if (!decodedUser) {
            throw new AppError_1.default(400, "User not valid!");
        }
        ;
        req.user = decodedUser;
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.protect = protect;
