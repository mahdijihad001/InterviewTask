import { Router } from "express";
import requestValidation from "../../utils/requestValidation";
import { validateZodSchema } from "./authZodSchema";
import { authController } from "./authController";

const authRouter = Router();


authRouter.post("/register" , requestValidation(validateZodSchema) , authController.registerUser);
authRouter.post("/login" , authController.loginUser);





export default authRouter;