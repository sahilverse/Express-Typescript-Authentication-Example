import { Request, Response, NextFunction } from "express";
import JwtUtils from "../utils/jwt";
import ResponseHandler from "../utils/responseHandler";
import prisma from "../config/prisma";
import { JwtTokenPayload } from "../types/types";
import { StatusCodes } from "http-status-codes";



export const userMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return ResponseHandler.sendError(res, 401, "Authorization token not provided");
    }

    try {
        const { id } = JwtUtils.verifyAccessToken(token) as JwtTokenPayload;


        const user = await prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                email: true,
                name: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        if (!user) {
            return ResponseHandler.sendError(res, StatusCodes.UNAUTHORIZED, "Authorization token is invalid");
        }

        req.user = user;
        next();
    } catch (error) {
        return ResponseHandler.sendError(res, StatusCodes.UNAUTHORIZED, "Invalid authorization token");
    }
};
