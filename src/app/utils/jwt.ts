import jwt from "jsonwebtoken"
import envVer from "../config/env"


export const generateJwt = (payload : Object) =>{
    const token = jwt.sign(payload , envVer.JWT_SECRATE , {expiresIn : "7d"});
    return token
};

export const verifyToken = (token : string) =>{
    const verify = jwt.verify(token , envVer.JWT_SECRATE);
    return verify
}