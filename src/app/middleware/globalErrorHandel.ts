import { NextFunction, Request, Response } from "express";
import AppError from "../errorHelpers/AppError";
import envVer from "../config/env";

const globalErrorHandle = (err: any, req: Request, res: Response, next: NextFunction) => {

    let statusCode = 500;
    let message = "Something went wrong!";

    if (err instanceof AppError) {
        statusCode = err.statusCode;
        message = err.message
    } else if (err instanceof Error) {
        statusCode = 500;
        message = err.message
    }

    res.status(statusCode).json({ success: false, message, statusCode, stack: envVer.DEV_ENV === "development" ? err?.stack : null })

};

export default globalErrorHandle;