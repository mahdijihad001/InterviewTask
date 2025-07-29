"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const globalErrorHandel_1 = __importDefault(require("./app/middleware/globalErrorHandel"));
const notFoundRoute_1 = __importDefault(require("./app/middleware/notFoundRoute"));
const authRoute_1 = __importDefault(require("./app/modules/auth/authRoute"));
const taskRoute_1 = __importDefault(require("./app/modules/task/taskRoute"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
app.use("/api/users", authRoute_1.default);
app.use("/api/notes", taskRoute_1.default);
app.get("", (req, res) => {
    res.status(200).json({ success: true, message: "Server successfully runing!" });
});
// Global Error Handle
app.use(globalErrorHandel_1.default);
// Not Found Route
app.use(notFoundRoute_1.default);
exports.default = app;
