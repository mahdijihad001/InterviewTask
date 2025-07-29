import mongoose from "mongoose";

export interface ITask{
    title : string,
    content : string,
    email : string
}

const taskSchema = new mongoose.Schema<ITask>({
    title : {
        type : String,
        required : [true , "Title must be required!"]
    },
    content : {
        type : String,
        required : [true , "Content must be required!"]
    },
    email : {
        type : String,
        required : [true , "Email must be required!"]
    }
} , {
    timestamps : true,
    versionKey : false
});

const Task = mongoose.model<ITask>("task" , taskSchema);

export default Task