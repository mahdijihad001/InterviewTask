"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateZodTask = exports.createTaskZod = void 0;
const zod_1 = __importDefault(require("zod"));
exports.createTaskZod = zod_1.default.object({
    title: zod_1.default.string({ invalid_type_error: "Title must be string" }),
    content: zod_1.default.string({ invalid_type_error: "Content must be string" })
});
exports.updateZodTask = zod_1.default.object({
    title: zod_1.default.string({ invalid_type_error: "Title must be string" }).optional(),
    content: zod_1.default.string({ invalid_type_error: "Content must be string" }).optional()
});
