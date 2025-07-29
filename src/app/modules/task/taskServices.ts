import { Request, Response } from "express";
import AppError from "../../errorHelpers/AppError";
import Task from "./taskModel";
import sendResponse from "../../utils/sendResponse";

const createTask = async (email: string, req: Request) => {
    const { title, content } = req.body;

    const task = await Task.create({ title: title, content: content, email: email });

    if (!task) {
        throw new AppError(400, "Task not created");
    };
    return task
};


const getAllTask = async(email : string , res : Response) => {
    const findAllTask = await Task.find({ email: email });

    if (!findAllTask || findAllTask.length === 0) {
        return sendResponse(res, {
            success: false,
            message: "No tasks found for this user",
            statusCode: 404,
            data: null
        });
    };

    return findAllTask

}


export const taskServices = {
    createTask,
    getAllTask
}