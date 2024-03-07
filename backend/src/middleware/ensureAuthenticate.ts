import { verify } from "jsonwebtoken";
import { authConfig } from "../config/auth";
import { NextFunction, Request, Response } from "express";

interface IPayload {
  sub: string;
}

export function ensureAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ message: "JWT token não informado!" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, authConfig.jwt.secret) as IPayload;

    request.user_id = user_id;

    return next();
  } catch (error) {
    console.log(error);
    return response.status(401).json({ message: "JWT token inválido!" });
  }
}
