import express, { Request, Response } from "express";
import cors from "cors";
import cookiePerser from "cookie-parser";
import globalErrorHandle from "./app/middleware/globalErrorHandel";
import notFoundRoute from "./app/middleware/notFoundRoute";
import authRouter from "./app/modules/auth/authRoute";
import taskRouter from "./app/modules/task/taskRoute";
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());
app.use(cookiePerser());


app.use("/api/users" , authRouter);
app.use("/api/notes" , taskRouter);

app.get("", (req: Request, res: Response) => {
    res.status(200).json({ success: true, message: "Server successfully runing!" });
});



// Global Error Handle
app.use(globalErrorHandle);
// Not Found Route
app.use(notFoundRoute);



export default app