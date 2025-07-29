import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { authServices } from "./authServices";
import sendResponse from "../../utils/sendResponse";



const registerUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const result = await authServices.createUser(req.body);

    sendResponse(res, {
        message: "User Register Successfully",
        statusCode: 201,
        data: result,
        success: true
    });

});


const loginUser = catchAsync(async(req : Request , res : Response , next : NextFunction) =>{
   
    const result = await authServices.userLogin(req.body);

    res.cookie("token" , result.token , {
        httpOnly : true,
        secure : false
    });

    sendResponse(res , {
        statusCode : 201,
        message : "Login Successfully!",
        success : true,
        data : {
            token : result.token,
            user : result.user
        }
    })

})


export const authController = {
    registerUser,
    loginUser
}

