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
const env_1 = __importDefault(require("./app/config/env"));
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
let server;
const connectDb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(env_1.default.MONGO_URL);
        console.log("Mongoose Connected Success");
        server = app_1.default.listen(env_1.default.PORT, () => {
            console.log(`Applicaton server successfully run on port : ${env_1.default.PORT}`);
        });
    }
    catch (error) {
        console.log("Mongoose connection error");
        console.log(error);
    }
});
connectDb();
process.on("SIGTERM", () => {
    console.log("Sigterm signal detected ... Server shuting down!");
    if (server) {
        server.close(() => {
            process.exit(0);
        });
    }
    process.exit(0);
});
process.on("SIGINT", () => {
    console.log("Sinint signal detected... Server shuting down!");
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
    ;
    process.exit(1);
});
process.on("unhandledRejection", (error) => {
    console.log("Unhandle Rejection detected... Server shuting down!", error);
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
    ;
    process.exit(1);
});
process.on("uncaughtException", (error) => {
    console.log("Uncaugth Expretion Signal detected... Server shuting down!", error);
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
    process.exit(1);
});
