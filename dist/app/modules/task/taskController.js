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
exports.taskController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const taskModel_1 = __importDefault(require("./taskModel"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const AppError_1 = __importDefault(require("../../errorHelpers/AppError"));
const mongoose_1 = __importDefault(require("mongoose"));
const taskServices_1 = require("./taskServices");
const createTask = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userEmail = req.user.email;
    const result = yield taskServices_1.taskServices.createTask(userEmail, req);
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Task Created Success",
        statusCode: 200,
        data: result
    });
}));
const getAllTask = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userEmail = req.user.email;
    const findAllTask = yield taskServices_1.taskServices.getAllTask(userEmail, res);
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "All task retrived successfully!",
        statusCode: 200,
        data: findAllTask
    });
}));
const getSingleTask = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        throw new AppError_1.default(404, "Task not found");
    }
    const result = yield taskModel_1.default.findOne({ _id: id });
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Task Retrived Successfully",
        statusCode: 200,
        data: result
    });
}));
const updateTask = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        throw new AppError_1.default(404, "Invalid task ID");
    }
    const { title, content } = req.body;
    const updatedTask = yield taskModel_1.default.findByIdAndUpdate(id, { title, content }, { new: true, runValidators: true });
    if (!updatedTask) {
        throw new AppError_1.default(404, "Task not found");
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Task updated successfully",
        statusCode: 200,
        data: updatedTask,
    });
}));
const deleteTask = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        throw new AppError_1.default(404, "Invalid task ID");
    }
    const deletedTask = yield taskModel_1.default.findByIdAndDelete(id);
    if (!deletedTask) {
        throw new AppError_1.default(404, "Task not found");
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Task deleted successfully",
        statusCode: 200,
        data: deletedTask,
    });
}));
exports.taskController = {
    createTask,
    getAllTask,
    getSingleTask,
    updateTask,
    deleteTask
};
