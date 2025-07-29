"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const AppError_1 = __importDefault(require("../errorHelpers/AppError"));
const loadEnvironmentVariables = () => {
    const requiredEnv = ["PORT", "MONGO_URL", "DEV_ENV", "JWT_SECRATE"];
    requiredEnv.forEach((key) => {
        if (!process.env[key]) {
            throw new AppError_1.default(404, `Required environment variables missing : ${key}`);
        }
    });
    return {
        PORT: process.env.PORT,
        MONGO_URL: process.env.MONGO_URL,
        DEV_ENV: process.env.DEV_ENV,
        JWT_SECRATE: process.env.JWT_SECRATE
    };
};
const envVer = loadEnvironmentVariables();
exports.default = envVer;
