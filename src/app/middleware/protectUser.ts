import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import AppError from "../errorHelpers/AppError";
import { verifyToken } from "../utils/jwt";


export const protect = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            throw new AppError(401, "Unauthoraized user");
        };

        const decodedUser = verifyToken(token) as JwtPayload;
        if (!decodedUser) {
            throw new AppError(400, "User not valid!");
        };
        req.user = decodedUser
        next();
    } catch (error) {
        next(error);
    }

}