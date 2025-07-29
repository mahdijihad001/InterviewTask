import { Server } from "http"
import envVer from "./app/config/env";
import mongoose from "mongoose";
import app from "./app";


let server: Server;

const connectDb = async () => {
    try {

        await mongoose.connect(envVer.MONGO_URL);
        console.log("Mongoose Connected Success");

        server = app.listen(envVer.PORT, () => {
            console.log(`Applicaton server successfully run on port : ${envVer.PORT}`);
        });
        

    } catch (error) {
        console.log("Mongoose connection error");
        console.log(error);
    }
}


connectDb();



process.on("SIGTERM", () => {
    console.log("Sigterm signal detected ... Server shuting down!");

    if (server) {
        server.close(() => {
            process.exit(0);
        })
    }
    process.exit(0);
});


process.on("SIGINT", () => {
    console.log("Sinint signal detected... Server shuting down!");

    if (server) {
        server.close(() => {
            process.exit(1);
        })
    };

    process.exit(1);
});

process.on("unhandledRejection", (error) => {
    console.log("Unhandle Rejection detected... Server shuting down!", error);
    if (server) {
        server.close(() => {
            process.exit(1);
        })
    };
    process.exit(1);
});

process.on("uncaughtException", (error) => {
    console.log("Uncaugth Expretion Signal detected... Server shuting down!" , error);

    if (server) {
        server.close(() => {
            process.exit(1);
        })
    }
    process.exit(1);
})