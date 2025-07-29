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
exports.taskServices = void 0;
const AppError_1 = __importDefault(require("../../errorHelpers/AppError"));
const taskModel_1 = __importDefault(require("./taskModel"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const createTask = (email, req) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, content } = req.body;
    const task = yield taskModel_1.default.create({ title: title, content: content, email: email });
    if (!task) {
        throw new AppError_1.default(400, "Task not created");
    }
    ;
    return task;
});
const getAllTask = (email, res) => __awaiter(void 0, void 0, void 0, function* () {
    const findAllTask = yield taskModel_1.default.find({ email: email });
    if (!findAllTask || findAllTask.length === 0) {
        return (0, sendResponse_1.default)(res, {
            success: false,
            message: "No tasks found for this user",
            statusCode: 404,
            data: null
        });
    }
    ;
    return findAllTask;
});
exports.taskServices = {
    createTask,
    getAllTask
};
