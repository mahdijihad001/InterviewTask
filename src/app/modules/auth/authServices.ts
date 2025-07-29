import User from "./authModel";
import AppError from "../../errorHelpers/AppError";
import bcrypt from "bcryptjs"
import { IUser } from "./interfaces";
import { generateJwt } from "../../utils/jwt";

const createUser = async (payload: Partial<IUser>) => {
    const { name, email, password } = payload;

    const existUser = await User.findOne({ email });

    if (existUser) {
        throw new AppError(400, "User already exist!");
    };

    const passwordHas = await bcrypt.hash(password as string, 10);

    const user = await User.create({ name: name, email: email, password: passwordHas });

    return user
};

const userLogin = async (data: Partial<IUser>) => {
    const { email, password } = data;

    const findUser = await User.findOne({ email: email });

    if (!findUser) {
        throw new AppError(404, "Invalid creadiantial");
    }

    const compairePassword = await bcrypt.compare(password as string, findUser.password as string);

    if (!compairePassword) {
        throw new AppError(400, "Password not valid!");
    };

    const payload = {
        userId: findUser._id,
        email: findUser.email
    };

    const token = generateJwt(payload);

    return {
        user : findUser,
        token
    }

}

export const authServices = {
    createUser,
    userLogin
}