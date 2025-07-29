import dotEnv from "dotenv";

dotEnv.config();

import AppError from "../errorHelpers/AppError";

interface IEnvironment {
    PORT: string,
    MONGO_URL: string,
    DEV_ENV: string,
    JWT_SECRATE : string
}

const loadEnvironmentVariables = (): IEnvironment => {
    const requiredEnv = ["PORT", "MONGO_URL", "DEV_ENV" , "JWT_SECRATE"];

    requiredEnv.forEach((key) => {
        if (!process.env[key]) {
            throw new AppError(404, `Required environment variables missing : ${key}`);
        }
    });


    return {
        PORT: process.env.PORT as string,
        MONGO_URL: process.env.MONGO_URL as string,
        DEV_ENV: process.env.DEV_ENV as string,
        JWT_SECRATE : process.env.JWT_SECRATE as string
    }
};

const envVer = loadEnvironmentVariables();

export default envVer;