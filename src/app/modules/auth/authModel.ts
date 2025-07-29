import mongoose from "mongoose";
import { IUser } from "./interfaces";

const userSchema = new mongoose.Schema<IUser>({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
} , {
    timestamps : true,
    versionKey : false
});

const User = mongoose.model<IUser>("user" , userSchema);

export default User