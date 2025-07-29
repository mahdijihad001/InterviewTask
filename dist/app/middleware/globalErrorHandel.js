"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = __importDefault(require("../errorHelpers/AppError"));
const env_1 = __importDefault(require("../config/env"));
const globalErrorHandle = (err, req, res, next) => {
    let statusCode = 500;
    let message = "Something went wrong!";
    if (err instanceof AppError_1.default) {
        statusCode = err.statusCode;
        message = err.message;
    }
    else if (err instanceof Error) {
        statusCode = 500;
        message = err.message;
    }
    res.status(statusCode).json({ success: false, message, statusCode, stack: env_1.default.DEV_ENV === "development" ? err === null || err === void 0 ? void 0 : err.stack : null });
};
exports.default = globalErrorHandle;
