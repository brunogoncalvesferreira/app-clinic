import { Request, Response } from "express";
import { prisma } from "../../database/prisma";

export class ConsultsController {
  async index(req: Request, res: Response) {
    try {
      const consults = await prisma.consult.findMany({
        include: {
          doctor_id: true,
          user_id: true
        }
      })

      return res.status(200).json(consults)
    } catch (error) {
      return res.status(400).json(error)
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params

      const consult = await prisma.consult.findUnique({ where: { id } })
      if(!consult) {
        return res.status(404).json('Consulta não encontrada!')
      }

      await prisma.consult.delete({ where: { id } })
      return res.status(200).json('Consulta deletada com sucesso!')
    } catch (error) {
      return res.status(400).json(error)
    }
  }
}