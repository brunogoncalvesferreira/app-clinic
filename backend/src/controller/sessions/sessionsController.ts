import { Request, Response } from "express";
import { prisma } from "../../database/prisma";
import { compare } from "bcrypt";
import { authConfig } from '../../config/auth'
import { sign } from "jsonwebtoken";

export class SessionsController {
  async create(req: Request, res: Response) {
    try {
      const { email, password } = req.body

      const user = await prisma.users.findUnique({ where: { email }})

      if(!user) {
        return res.status(404).json('E-mail ou senha inválidos!')
      }

      const passwordMatched = await compare(password, user.password)

      if(!passwordMatched) {
        return res.status(404).json('E-mail ou senha inválidos!')
      }

      const { secret, expiresIn } =  authConfig.jwt

      const token = sign({}, secret, {
        subject: user.id,
        expiresIn
      })

      return res.json({ user, token })
    } catch (error) {
      return res.status(400).json(error)
    }
  }
}