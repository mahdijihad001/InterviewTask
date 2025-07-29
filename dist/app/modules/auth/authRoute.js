"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const requestValidation_1 = __importDefault(require("../../utils/requestValidation"));
const authZodSchema_1 = require("./authZodSchema");
const authController_1 = require("./authController");
const authRouter = (0, express_1.Router)();
authRouter.post("/register", (0, requestValidation_1.default)(authZodSchema_1.validateZodSchema), authController_1.authController.registerUser);
authRouter.post("/login", authController_1.authController.loginUser);
exports.default = authRouter;
