"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateZodSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.validateZodSchema = zod_1.default.object({
    name: zod_1.default.string({ invalid_type_error: "Name must be string" }).min(3, { message: "Name to short. Menumum 2 character long." }),
    email: zod_1.default.string({ invalid_type_error: "Email must be string" }).email({ message: "Invalid email address formate" }).toLowerCase().trim(),
    password: zod_1.default.string().min(8, { message: "Password to short , menimum 8 carecter long" })
        .regex(/\d/, { message: "Password must be contain at least one number" })
        .regex(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, { message: "Password must be at last one speacil character" })
        .regex(/[A-Z]/, { message: "Password must be contain must be one uppercase chacacter" })
        .regex(/[a-z]/, { message: "Password must be contain at last one lowarcast character" })
});
