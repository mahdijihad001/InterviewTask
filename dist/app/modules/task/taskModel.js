"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const taskSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: [true, "Title must be required!"]
    },
    content: {
        type: String,
        required: [true, "Content must be required!"]
    },
    email: {
        type: String,
        required: [true, "Email must be required!"]
    }
}, {
    timestamps: true,
    versionKey: false
});
const Task = mongoose_1.default.model("task", taskSchema);
exports.default = Task;
