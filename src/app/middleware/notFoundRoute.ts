import { Request, Response } from "express";

const notFoundRoute = (req: Request, res: Response) => {
    res.status(404).json({ success: false, message: "Route not found!" });
};

export default notFoundRoute
