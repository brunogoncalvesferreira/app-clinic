import { Request, Response } from "express";
import { prisma } from "../../database/prisma";
import { hash } from "bcrypt"

export class UsersController {
  async create(req: Request, res: Response) {
    try {
      const { name, email, password, phone }  = req.body

      const userAlreadyExists = await prisma.users.findUnique({
        where: {
          email
        }
      })

      if (userAlreadyExists) {
        return res.status(400).json('Usuário já existe!')
      }
   
      const hashPassword = await hash(password, 10)

      await prisma.users.create({
        data: {
          name,
          email,
          password: hashPassword,
          phone,
        }
      })

      return res.status(201).json('Usuário criado com sucesso!')
    } catch (error) {
      console.log(error)
      return res.status(400).json(error)
    }
  }

  async index(req: Request, res: Response) {
    try {
      const users = await prisma.users.findMany({
        include: {
          consult: true
        }
      })

      return res.status(200).json(users)
    } catch (error) {
      console.log(error)
      return res.status(400).json(error)
    }
  }

  async show(req: Request, res: Response) {
    try {
      const { id } = req.params 

      const user = await prisma.users.findUnique({
        where: { id },
        include: {
          consult: true
        }
      
      })

      if(!user) {
        return res.status(404).json('Usuário não encontrado!')
      }

      return res.status(200).json(user)

    } catch (error) {
      console.log(error)
      return res.status(400).json(error)
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params
      const { date_consult, comments, status, doctor_id } = req.body

      const user = await prisma.users.findUnique({ where: { id } })

      if(!user) {
        return res.status(404).json('Usuário não encontrado!')
      }

      const consult = await prisma.users.update({
        where: {
          id
        },

        data: {
          consult: {
            create: {
              date_consult,
              comments,
              status,
              doctorId: doctor_id
            }
          }
        }
      })

      return res.status(200).json(consult)

    } catch (error) {
      console.log(error)
      return res.status(400).json(error)
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params

      const user = await prisma.users.findUnique({ where: { id } })

      if(!user) {
        return res.status(404).json('Usuário não encontrado!')
      }

      await prisma.users.delete({ where: { id } })

      return res.status(200).json('Usuário deletado com sucesso!')
    } catch (error) {
      console.log(error)
      return res.status(400).json(error)
    }
  }
}