import { NextFunction, Request, Response } from "express"
import catchAsync from "../../utils/catchAsync"
import Task from "./taskModel";
import sendResponse from "../../utils/sendResponse";
import AppError from "../../errorHelpers/AppError";
import mongoose from "mongoose";
import { taskServices } from "./taskServices";

const createTask = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const userEmail = req.user.email;
   const result = await taskServices.createTask(userEmail, req);

    sendResponse(res, {
        success: true,
        message: "Task Created Success",
        statusCode: 200,
        data: result
    })

})
const getAllTask = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const userEmail = req.user.email;

    const findAllTask = await taskServices.getAllTask(userEmail , res);

    sendResponse(res, {
        success: true,
        message: "All task retrived successfully!",
        statusCode: 200,
        data: findAllTask
    })

});


const getSingleTask = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new AppError(404, "Task not found");
    }

    const result = await Task.findOne({ _id: id });

    sendResponse(res, {
        success: true,
        message: "Task Retrived Successfully",
        statusCode: 200,
        data: result
    })

});


const updateTask = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new AppError(404, "Invalid task ID");
    }

    const { title, content } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(
        id,
        { title, content },
        { new: true, runValidators: true }
    );

    if (!updatedTask) {
        throw new AppError(404, "Task not found");
    }

    sendResponse(res, {
        success: true,
        message: "Task updated successfully",
        statusCode: 200,
        data: updatedTask,
    });
});

const deleteTask = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new AppError(404, "Invalid task ID");
    }

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
        throw new AppError(404, "Task not found");
    }

    sendResponse(res, {
        success: true,
        message: "Task deleted successfully",
        statusCode: 200,
        data: deletedTask,
    });
});



export const taskController = {
    createTask,
    getAllTask,
    getSingleTask,
    updateTask,
    deleteTask
}