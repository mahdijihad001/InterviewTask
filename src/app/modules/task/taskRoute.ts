import { Router } from "express";
import { taskController } from "./taskController";
import { protect } from "../../middleware/protectUser";
import { createTaskZod, updateZodTask } from "./taskZodSchema";
import requestValidation from "../../utils/requestValidation";

const taskRouter = Router();

taskRouter.post("/" , requestValidation(createTaskZod) ,protect ,taskController.createTask);
taskRouter.get("/" ,  protect ,taskController.getAllTask);
taskRouter.get("/:id" ,  protect ,taskController.getSingleTask);
taskRouter.put("/:id" , requestValidation(updateZodTask) ,protect ,taskController.updateTask);
taskRouter.delete("/:id" ,  protect ,taskController.deleteTask);





export default taskRouter;