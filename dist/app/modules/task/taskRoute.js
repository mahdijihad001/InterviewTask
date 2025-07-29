"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taskController_1 = require("./taskController");
const protectUser_1 = require("../../middleware/protectUser");
const taskZodSchema_1 = require("./taskZodSchema");
const requestValidation_1 = __importDefault(require("../../utils/requestValidation"));
const taskRouter = (0, express_1.Router)();
taskRouter.post("/", (0, requestValidation_1.default)(taskZodSchema_1.createTaskZod), protectUser_1.protect, taskController_1.taskController.createTask);
taskRouter.get("/", protectUser_1.protect, taskController_1.taskController.getAllTask);
taskRouter.get("/:id", protectUser_1.protect, taskController_1.taskController.getSingleTask);
taskRouter.put("/:id", (0, requestValidation_1.default)(taskZodSchema_1.updateZodTask), protectUser_1.protect, taskController_1.taskController.updateTask);
taskRouter.delete("/:id", protectUser_1.protect, taskController_1.taskController.deleteTask);
exports.default = taskRouter;
