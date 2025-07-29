import { Response } from "express";

interface TMeta{
    total : number
}

interface TSendResponse<T> {
    statusCode: number,
    message: string,
    data: T,
    success: boolean,
    meta ?: TMeta
}

const sendResponse = <T>(res: Response, data: TSendResponse<T>) => {
    res.status(data.statusCode).json({
        success : data.success,
        message : data.message,
        statusCod : data.statusCode,
        meta : data.meta,
        data : data.data
    })
};

export default sendResponse